import { sql, ensureTables } from "@/lib/cubble-db";

// Cubble's results and stats (the game is public/cube/index.html).
// POST: the page sends today's result at Check, once per player per day (a replay keeps the first). It gets back
// today's numbers (rank, percentiles, the board), the player's own (streaks, best times, last 4 weeks) and the
// win-streak board. GET: the same stats without a result, for reopening the card. PUT: the nickname.
// The player is a random id the browser keeps; nothing about the person is stored but the nickname they typed.

const COLS = 16; // a 4×4 base since 27 Nov (3×3 before): must match the page
const LOOK = [10, 9, 8, 8, 7, 6, 5]; // seconds the cube shows, Monday first: must match LEVELS in the page
const BOARD = 10;
const ID = /^[0-9a-f-]{20,40}$/i;
const DAY = /^\d{4}-\d{2}-\d{2}$/;
const DAY_MS = 86400000;
const BANNED = /hitler|nazi|nigg|fag|rape|cunt/i;

// ponytail: per-instance memory, like the other routes. Stats are all this protects.
const seen = new Map<string, { day: string; n: number }>();
function limited(req: Request, max: number) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  const mine = seen.get(ip);
  const n = mine?.day === day ? mine.n : 0;
  seen.set(ip, { day, n: n + 1 });
  return n >= max;
}

const weekday = (day: string) => (new Date(`${day}T00:00:00Z`).getUTCDay() + 6) % 7;
const shift = (day: string, days: number) => new Date(Date.parse(`${day}T00:00:00Z`) + days * DAY_MS).toISOString().slice(0, 10);
function validDay(day: unknown): day is string {
  if (typeof day !== "string" || !DAY.test(day)) return false;
  const diff = Math.abs(Date.parse(`${day}T00:00:00Z`) - Date.now());
  return diff < 2 * DAY_MS; // the player's local date, a day either side of the server's
}
function cleanNick(nick: unknown) {
  if (typeof nick !== "string") return null;
  const s = nick.replace(/[^\p{L}\p{N} _.'-]/gu, "").replace(/\s+/g, " ").trim().slice(0, 16);
  return !s || BANNED.test(s) ? null : s;
}
const pct = (part: number, whole: number) => (whole > 0 ? Math.round((100 * part) / whole) : null);
const dayStr = (d: unknown) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d));

type Me = { solved: boolean; right: number; look_ms: number; build_ms: number; total_ms: number };

async function stats(player: string, day: string) {
  const db = sql!;
  const [mine] = (await db`select solved, "right", look_ms, build_ms, total_ms from cubble_results where day = ${day} and player = ${player}`) as unknown as Me[];
  const me = mine ?? { solved: false, right: -1, look_ms: -1, build_ms: -1, total_ms: -1 };
  const [t] = (await db`select count(*)::int as players, count(*) filter (where solved)::int as solvers,
      count(*) filter (where solved and total_ms > ${me.total_ms})::int as slower,
      count(*) filter (where look_ms > ${me.look_ms})::int as looked_longer,
      count(*) filter (where solved and build_ms > ${me.build_ms})::int as built_slower,
      count(*) filter (where "right" < ${me.right})::int as fewer_right,
      count(*) filter (where solved and total_ms < ${me.total_ms})::int as faster
    from cubble_results where day = ${day}`) as unknown as Record<string, number>[];
  const board = await db`select coalesce(p.nick, 'Anonymous') as nick, r.total_ms as "totalMs", r.player = ${player} as you
    from cubble_results r left join cubble_players p using (player) where r.day = ${day} and r.solved order by r.total_ms, r.at limit ${BOARD}`;
  // Today's solve times in 5-second bins (the last one open), the median solver's split, and the rows around me.
  const bins = await db`select least(total_ms / 5000, 23)::int as bin, count(*)::int as n from cubble_results where day = ${day} and solved group by 1`;
  const hist: number[] = Array(24).fill(0);
  for (const b of bins) hist[b.bin] = b.n;
  const [median] = t.solvers ? await db`select percentile_cont(0.5) within group (order by total_ms)::int as "totalMs",
      percentile_cont(0.5) within group (order by look_ms)::int as "lookMs", percentile_cont(0.5) within group (order by build_ms)::int as "buildMs"
    from cubble_results where day = ${day} and solved` : [null];
  const rank = me.solved ? t.faster + 1 : 0;
  const around = me.solved ? await db`select nick, "totalMs", you, rank::int from (
      select coalesce(p.nick, 'Anonymous') as nick, r.total_ms as "totalMs", r.player = ${player} as you, rank() over (order by r.total_ms, r.at) as rank
      from cubble_results r left join cubble_players p using (player) where r.day = ${day} and r.solved) t
    where rank between ${rank - 2} and ${rank + 2} order by rank` : [];
  const streaks = await db`select coalesce(nick, 'Anonymous') as nick, win_streak as "winStreak", player = ${player} as you
    from cubble_players where win_streak > 0 and last_day >= ${shift(day, -1)} order by win_streak desc, updated limit ${BOARD}`;
  const [p] = await db`select nick, played, solved, played_streak as "playedStreak", win_streak as "winStreak",
    best_win_streak as "bestWinStreak", last_day as "lastDay" from cubble_players where player = ${player}`;
  let you = null;
  if (p) {
    const days = await db`select day, solved, total_ms as "totalMs" from cubble_results where player = ${player} and day > ${shift(day, -28)} and day <= ${day} order by day`;
    const best = await db`select extract(isodow from day)::int - 1 as wd, min(total_ms)::int as ms from cubble_results
      where player = ${player} and solved and day <> ${day} group by 1`;
    const [a] = await db`select avg(total_ms) filter (where solved)::int as "avgMs" from cubble_results where player = ${player}`;
    const bestPrior: (number | null)[] = Array(7).fill(null);
    for (const b of best) bestPrior[b.wd] = b.ms;
    // A streak that ended before yesterday is over: the stored number is stale until the next play.
    const live = p.lastDay && dayStr(p.lastDay) >= shift(day, -1);
    you = { ...p, lastDay: p.lastDay ? dayStr(p.lastDay) : null, playedStreak: live ? p.playedStreak : 0, winStreak: live ? p.winStreak : 0,
      avgMs: a?.avgMs ?? null, bestPrior, days: days.map((d) => ({ ...d, day: dayStr(d.day) })) };
  }
  const youToday = mine ? {
    solved: me.solved, right: me.right, lookMs: me.look_ms, buildMs: me.build_ms, totalMs: me.total_ms,
    rank: me.solved ? t.faster + 1 : null,
    fasterThan: me.solved ? pct(t.slower, t.solvers - 1) : null,
    lookLessThan: pct(t.looked_longer, t.players - 1),
    buildFasterThan: me.solved ? pct(t.built_slower, t.solvers - 1) : null,
    rightBetterThan: me.solved ? null : pct(t.fewer_right, t.players - 1),
  } : null;
  return { day, today: { players: t.players, solvers: t.solvers, you: youToday, board, hist, median: median ?? null, around }, you, streaks };
}

export async function GET(req: Request) {
  if (!sql) return Response.json({ code: "no_store" }, { status: 503 });
  const u = new URL(req.url);
  const player = u.searchParams.get("player") ?? "", day = u.searchParams.get("day");
  if (!ID.test(player) || !validDay(day)) return Response.json({ code: "bad_request" }, { status: 400 });
  if (limited(req, 200)) return Response.json({ code: "daily_limit" }, { status: 429 });
  try { await ensureTables(); return Response.json(await stats(player, day)); }
  catch (e) { console.error("cubble: stats failed", e); return Response.json({ code: "failed" }, { status: 502 }); }
}

export async function POST(req: Request) {
  if (!sql) return Response.json({ code: "no_store" }, { status: 503 });
  const b = await req.json().catch(() => ({}));
  const { player, day } = b;
  const right = Number(b.right), lookMs = Math.round(Number(b.lookMs)), buildMs = Math.round(Number(b.buildMs));
  const solved = right === COLS;
  const ok = ID.test(player) && validDay(day) && Number.isInteger(right) && right >= 0 && right <= COLS && b.solved === solved
    && lookMs >= 300 && lookMs <= LOOK[weekday(day)] * 1000 + 3000 && buildMs >= 300 && buildMs <= 3600_000;
  if (!ok) return Response.json({ code: "bad_request" }, { status: 400 });
  if (limited(req, 60)) return Response.json({ code: "daily_limit" }, { status: 429 });
  const nick = cleanNick(b.nick);
  try {
    await ensureTables();
    const db = sql;
    const inserted = await db`insert into cubble_results (day, player, solved, "right", look_ms, build_ms, total_ms)
      values (${day}, ${player}, ${solved}, ${right}, ${lookMs}, ${buildMs}, ${lookMs + buildMs}) on conflict do nothing returning day`;
    if (inserted.length) {
      // The streaks: one more if yesterday was played; a win streak only grows on a solve.
      const [p] = await db`select played_streak, win_streak, best_win_streak, last_day from cubble_players where player = ${player}`;
      const last = p?.last_day ? dayStr(p.last_day) : null;
      const chain = last === shift(day, -1);
      const skip = last && last > day; // an out-of-order day (a timezone hop): count it, don't touch the streaks
      const playedStreak = skip ? p.played_streak : chain ? p.played_streak + 1 : 1;
      const winStreak = skip ? p.win_streak : solved ? (chain ? p.win_streak + 1 : 1) : 0;
      const best = Math.max(p?.best_win_streak ?? 0, winStreak);
      await db`insert into cubble_players (player, nick, played, solved, played_streak, win_streak, best_win_streak, last_day, updated)
        values (${player}, ${nick}, 1, ${solved ? 1 : 0}, ${playedStreak}, ${winStreak}, ${best}, ${day}, now())
        on conflict (player) do update set played = cubble_players.played + 1, solved = cubble_players.solved + ${solved ? 1 : 0},
          played_streak = ${playedStreak}, win_streak = ${winStreak}, best_win_streak = ${best},
          last_day = greatest(cubble_players.last_day, ${day}::date), nick = coalesce(${nick}, cubble_players.nick), updated = now()`;
    }
    return Response.json(await stats(player, day));
  } catch (e) {
    console.error("cubble: result failed", e);
    return Response.json({ code: "failed" }, { status: 502 });
  }
}

export async function PUT(req: Request) {
  if (!sql) return Response.json({ code: "no_store" }, { status: 503 });
  const b = await req.json().catch(() => ({}));
  const nick = cleanNick(b.nick);
  if (!ID.test(b.player) || !nick) return Response.json({ code: "bad_request" }, { status: 400 });
  if (limited(req, 60)) return Response.json({ code: "daily_limit" }, { status: 429 });
  try {
    await ensureTables();
    await sql`insert into cubble_players (player, nick) values (${b.player}, ${nick})
      on conflict (player) do update set nick = ${nick}, updated = now()`;
    return Response.json({ nick });
  } catch (e) {
    console.error("cubble: nick failed", e);
    return Response.json({ code: "failed" }, { status: 502 });
  }
}
