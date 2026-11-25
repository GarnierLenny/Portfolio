import { sql } from "@/lib/crosswise-db";

// Daily Cube's results (public/cube/index.html, /api/cube): one row per player per day, and one row per player with
// their streaks. Same Railway Postgres as the Crosswise log. A player is a random id the browser made; the nickname is
// the only thing they typed. Without a database URL the game still runs, with no stats or boards.
export { sql };

let ready: Promise<unknown> | null = null;
export function ensureTables() {
  if (!sql) return Promise.resolve();
  ready ??= sql.unsafe(`
    create table if not exists cube_results (
      day date not null, player text not null, solved boolean not null, "right" int not null,
      look_ms int not null, build_ms int not null, total_ms int not null, at timestamptz not null default now(),
      primary key (day, player));
    create table if not exists cube_players (
      player text primary key, nick text, played int not null default 0, solved int not null default 0,
      played_streak int not null default 0, win_streak int not null default 0, best_win_streak int not null default 0,
      last_day date, updated timestamptz not null default now())`)
    .catch((e) => { ready = null; throw e; }); // a failed create retries on the next call
  return ready;
}
