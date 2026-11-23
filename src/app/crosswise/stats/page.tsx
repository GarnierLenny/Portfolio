import type { Metadata } from "next";
import { sql, ensureTable } from "@/lib/crosswise-db";

// Crosswise's public stats: every cross and every graded idea people made, counted (rows from /api/cross/log).
// Rebuilt at most every 5 minutes, so a crowd of visitors costs one database read.
export const revalidate = 300;
export const metadata: Metadata = {
  title: "Stats · Crosswise",
  description: "Every cross made on Crosswise, counted: the worlds people cross, and how the ideas grade.",
};

const CRITERIA: [string, string][] = [
  ["originality", "Originality"], ["feasibility", "Feasibility"], ["impact", "Impact"], ["viral", "Viral potential"],
  ["space", "Market space"], ["marketing", "Easy to market"], ["revenue", "Money potential"],
];
const FORM_LABEL: Record<string, string> = {
  App: "📱 App or tool", Game: "🎲 Game", Content: "🎙️ Content", Physical: "📦 Physical thing", Event: "🎟️ Event", Service: "🤝 Service",
};

type Row = { kind: string; at: Date; data: Record<string, unknown> };
type Idea = { title: string; pitch: string; cross: string; form: string; grade: number };

/** "🍳 Cooking" or "🥋 Belt gradings (Martial arts › Karate)" → "🍳 Cooking", "🥋 Belt gradings". */
const world = (w: unknown) => String(w ?? "").replace(/\s*\(.*\)$/, "").trim();
const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);
const top = (counts: Map<string, number>, n: number) => [...counts].sort((a, b) => b[1] - a[1]).slice(0, n);
const bump = (m: Map<string, number>, k: string) => k && m.set(k, (m.get(k) ?? 0) + 1);

// ponytail: reads every row and counts in JS. Fine to tens of thousands of rows; move the counts into SQL after that.
async function load() {
  if (!sql) return null;
  try {
    await ensureTable();
    return (await sql`select kind, at, data from crosswise_log order by at`) as unknown as Row[];
  } catch (e) {
    console.error("cross stats: read failed", e);
    return null;
  }
}

function count(rows: Row[]) {
  const crosses = rows.filter((r) => r.kind === "cross");
  const worlds = new Map<string, number>(), pairs = new Map<string, number>();
  for (const { data } of crosses) {
    const a = world(data.a), b = world(data.b);
    bump(worlds, a);
    bump(worlds, b);
    if (a && b) bump(pairs, [a, b].sort().join(" × "));
  }
  const ideas: (Idea & { scores: Record<string, number> })[] = rows.filter((r) => r.kind === "idea").map(({ data }) => {
    const raw = (data.scores ?? {}) as Record<string, unknown>;
    const scores = Object.fromEntries(CRITERIA.map(([k]) => [k, Math.min(5, Math.max(1, Number(raw[k]) || 1))]));
    return {
      title: String(data.title ?? ""), pitch: String(data.pitch ?? ""), cross: String(data.cross ?? ""),
      form: String(data.form ?? ""), scores, grade: avg(Object.values(scores)),
    };
  });
  // Grades run 1 to 5: eight half-point bins, the last one closed (a 5.0 lands in 4.5–5).
  const bins = Array.from({ length: 8 }, (_, i) => ({ from: 1 + i / 2, n: 0 }));
  for (const i of ideas) bins[Math.min(7, Math.floor((i.grade - 1) * 2))].n++;
  const forms = Object.keys(FORM_LABEL).map((f) => {
    const mine = ideas.filter((i) => i.form === f);
    return { form: f, n: mine.length, grade: avg(mine.map((i) => i.grade)) };
  }).filter((f) => f.n).sort((a, b) => b.n - a.n);
  return {
    crosses: crosses.length, ideas: ideas.length, since: rows[0]?.at,
    grade: avg(ideas.map((i) => i.grade)), bins, forms,
    criteria: CRITERIA.map(([k, label]) => ({ label, score: avg(ideas.map((i) => i.scores[k])) })),
    worlds: top(worlds, 8), pairs: top(pairs, 5),
    best: [...ideas].sort((a, b) => b.grade - a.grade).slice(0, 5),
  };
}

const card = "rounded-2xl bg-white dark:bg-[#232325] ring-1 ring-black/5 dark:ring-white/10 p-5 sm:p-6";
const muted = "text-[#6e6e73] dark:text-[#98989d]";

function Logo() {
  // The Crosswise logo: two tiles, two worlds, the overlap is where ideas come from.
  return (
    <svg width="36" height="36" viewBox="10 10 60 60" aria-hidden="true">
      <defs><clipPath id="cw-s"><rect x="12" y="16" width="34" height="34" rx="9" /></clipPath></defs>
      <rect x="12" y="16" width="34" height="34" rx="9" fill="#0a66e0" />
      <rect x="34" y="30" width="34" height="34" rx="9" fill="#af52de" />
      <rect x="34" y="30" width="34" height="34" rx="9" fill="#4b2ca8" clipPath="url(#cw-s)" />
    </svg>
  );
}

function Bar({ label, value, max, note }: { label: string; value: number; max: number; note: string }) {
  return (
    <li className="grid grid-cols-[minmax(0,9rem)_1fr_auto] items-center gap-3 text-sm">
      <span className="truncate">{label}</span>
      <span className="h-2 rounded-full bg-[#f0f0f3] dark:bg-white/10 overflow-hidden">
        <span className="block h-full rounded-full bg-[#0a66e0]" style={{ width: `${max ? (value / max) * 100 : 0}%` }} />
      </span>
      <span className={`tabular-nums ${muted}`}>{note}</span>
    </li>
  );
}

export default async function StatsPage() {
  const rows = await load();
  const s = rows?.length ? count(rows) : null;
  const peak = s ? Math.max(...s.bins.map((b) => b.n)) : 0;

  return (
    <main className="min-h-screen bg-[#f5f5f7] dark:bg-[#1c1c1e] text-[#1d1d1f] dark:text-[#f5f5f7] px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-3xl flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <a href="/crosswise" className="flex items-center gap-2 w-fit font-bold text-lg"><Logo /> Crosswise</a>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">What people cross</h1>
          <p className={muted}>
            Every cross made on Crosswise, counted, and how Claude graded the ideas it gave.
            Nothing about who made them is kept. Updated every 5 minutes.
          </p>
        </header>

        {!s ? (
          <section className={card}>
            <p>No crosses yet. <a href="/crosswise" className="text-[#0a66e0] underline underline-offset-4">Make the first one</a>.</p>
          </section>
        ) : (
          <>
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                [s.crosses.toLocaleString("en"), s.crosses === 1 ? "cross" : "crosses"],
                [s.ideas.toLocaleString("en"), s.ideas === 1 ? "idea graded" : "ideas graded"],
                [s.grade ? s.grade.toFixed(1) : "–", "average grade, out of 5"],
                [s.since ? new Date(s.since).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "–", "counting since"],
              ].map(([big, small]) => (
                <div key={small} className={`${card} !p-4`}>
                  <div className="text-2xl font-bold tabular-nums">{big}</div>
                  <div className={`text-sm ${muted}`}>{small}</div>
                </div>
              ))}
            </section>

            {s.ideas > 0 && (
              <section className={card}>
                <h2 className="font-bold">How the ideas grade</h2>
                <p className={`text-sm ${muted} mb-5`}>Each idea&apos;s average over 7 criteria, from 1 to 5.</p>
                <div className="flex items-end gap-2 h-40" role="img" aria-label={s.bins.map((b) => `${b.from}–${b.from + 0.5}: ${b.n}`).join(", ")}>
                  {s.bins.map((b) => (
                    <div key={b.from} className="flex-1 flex flex-col items-center justify-end gap-1 h-full">
                      <span className={`text-xs tabular-nums ${muted}`}>{b.n || ""}</span>
                      <span className="w-full rounded-md bg-gradient-to-t from-[#0a66e0] to-[#af52de]" style={{ height: `${peak ? (b.n / peak) * 100 : 0}%`, minHeight: b.n ? 4 : 0 }} />
                    </div>
                  ))}
                </div>
                <div className={`flex gap-2 mt-2 text-xs tabular-nums ${muted}`}>
                  {s.bins.map((b) => <span key={b.from} className="flex-1 text-center">{b.from.toFixed(1)}</span>)}
                </div>
                <ul className="flex flex-col gap-3 mt-6">
                  {s.criteria.map((c) => <Bar key={c.label} label={c.label} value={c.score} max={5} note={c.score.toFixed(1)} />)}
                </ul>
              </section>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              <section className={card}>
                <h2 className="font-bold mb-4">Most-crossed worlds</h2>
                <ul className="flex flex-col gap-3">
                  {s.worlds.map(([w, n]) => <Bar key={w} label={w} value={n} max={s.worlds[0][1]} note={String(n)} />)}
                </ul>
              </section>
              <section className={card}>
                <h2 className="font-bold mb-4">Formats Claude picked</h2>
                <ul className="flex flex-col gap-3">
                  {s.forms.map((f) => <Bar key={f.form} label={FORM_LABEL[f.form]} value={f.n} max={s.forms[0].n} note={`${f.n} · ★ ${f.grade.toFixed(1)}`} />)}
                </ul>
              </section>
            </div>

            <section className={card}>
              <h2 className="font-bold mb-4">Top pairs</h2>
              <ol className="flex flex-col gap-2">
                {s.pairs.map(([p, n]) => (
                  <li key={p} className="flex justify-between gap-4 text-sm"><span className="min-w-0">{p}</span><span className={`tabular-nums ${muted}`}>{n}×</span></li>
                ))}
              </ol>
            </section>

            {s.best.length > 0 && (
              <section className={card}>
                <h2 className="font-bold mb-4">Best-graded ideas</h2>
                <ol className="flex flex-col gap-5">
                  {s.best.map((i, n) => (
                    <li key={n} className="flex gap-4">
                      <span className="font-bold tabular-nums text-[#0a66e0] shrink-0">★ {i.grade.toFixed(1)}</span>
                      <div className="min-w-0">
                        <div className="font-bold">{i.title}</div>
                        <p className="text-sm mt-0.5">{i.pitch}</p>
                        <p className={`text-xs mt-1 ${muted}`}>{[i.cross, FORM_LABEL[i.form]].filter(Boolean).join(" · ")}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </>
        )}

        <footer className={`text-sm ${muted}`}>
          <a href="/crosswise" className="text-[#0a66e0] underline underline-offset-4">Make a cross</a> and it shows up here.
        </footer>
      </div>
    </main>
  );
}
