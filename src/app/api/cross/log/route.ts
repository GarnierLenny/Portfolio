import postgres from "postgres";

// Crosswise records every cross and every rated idea here, anonymously (no IP or anything about the person is
// stored), for public stats later. One table, one JSON row per event, so new stats never need a migration.
// DATABASE_URL is the Railway Postgres public URL, set in Vercel. Without it logging is off and the tool works as before.
const url = process.env.DATABASE_URL;
const sql = url ? postgres(url, { max: 1, ssl: /localhost|127\.0\.0\.1/.test(url) ? false : "require" }) : null;

const KINDS = new Set(["cross", "idea"]);
const ROWS_PER_DAY = 300; // per visitor: a cross is 1 row plus 3 ideas, a branch 3 ideas, far below this
const MAX_ROW = 4_000; // characters of JSON per row

// ponytail: per-instance memory like the route next door; only fake rows get through, and they're only stats.
const seen = new Map<string, { day: string; rows: number }>();
let ready: Promise<unknown> | null = null;

export async function POST(req: Request) {
  if (!sql) return new Response(null, { status: 204 });
  const { rows } = await req.json().catch(() => ({}));
  const ok = Array.isArray(rows) && rows.length > 0 && rows.length <= 10 && rows.every((r) =>
    KINDS.has(r?.kind) && r.data && typeof r.data === "object" && JSON.stringify(r.data).length <= MAX_ROW);
  if (!ok) return Response.json({ code: "bad_request" }, { status: 400 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  const mine = seen.get(ip);
  const count = mine?.day === day ? mine.rows : 0;
  if (count + rows.length > ROWS_PER_DAY) return Response.json({ code: "daily_limit" }, { status: 429 });
  seen.set(ip, { day, rows: count + rows.length });

  try {
    ready ??= sql`create table if not exists crosswise_log (
      id bigserial primary key, at timestamptz not null default now(), kind text not null, data jsonb not null)`;
    await ready;
    await sql`insert into crosswise_log ${sql(rows.map((r: { kind: string; data: object }) =>
      ({ kind: r.kind, data: sql.json(r.data as postgres.JSONValue) })))}`;
    return new Response(null, { status: 204 });
  } catch (e) {
    ready = null; // a failed create retries on the next call
    console.error("cross log: insert failed", e);
    return Response.json({ code: "failed" }, { status: 502 });
  }
}
