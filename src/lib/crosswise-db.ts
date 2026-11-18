import postgres from "postgres";

// Crosswise's log: one table, one JSON row per event ("cross" or "idea"), written by /api/cross/log, read by
// /cross/stats. Nothing about the person is stored. The URL is the Railway Postgres public URL, set in Vercel as
// DATABASE_PUBLIC_URL (Railway's name for it). Without it, logging is off and the stats page shows no data.
const url = process.env.DATABASE_URL || process.env.DATABASE_PUBLIC_URL;
export const sql = url ? postgres(url, { max: 1, ssl: /localhost|127\.0\.0\.1/.test(url) ? false : "require" }) : null;

let ready: Promise<unknown> | null = null;
export function ensureTable() {
  if (!sql) return Promise.resolve();
  ready ??= sql`create table if not exists crosswise_log (
    id bigserial primary key, at timestamptz not null default now(), kind text not null, data jsonb not null)`
    .catch((e) => { ready = null; throw e; }); // a failed create retries on the next call
  return ready;
}
