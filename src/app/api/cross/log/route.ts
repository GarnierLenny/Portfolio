import type postgres from "postgres";
import { sql, ensureTable } from "@/lib/crosswise-db";

// Crosswise records every cross and every rated idea here, anonymously (no IP or anything about the person is
// stored), for the public stats at /crosswise/stats. Without a database URL, logging is off and the tool works as before.

const KINDS = new Set(["cross", "idea"]);
const ROWS_PER_DAY = 300; // per visitor: a cross is 1 row plus 3 ideas, a branch 3 ideas, far below this
const MAX_ROW = 4_000; // characters of JSON per row

// ponytail: per-instance memory like the route next door, and anyone can post made-up rows. They're only stats:
// if junk ever shows on /crosswise/stats, delete its rows in Railway (Database tab, crosswise_log).
const seen = new Map<string, { day: string; rows: number }>();

export async function POST(req: Request) {
  const db = sql;
  if (!db) return new Response(null, { status: 204 });
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
    await ensureTable();
    await db`insert into crosswise_log ${db(rows.map((r: { kind: string; data: object }) =>
      ({ kind: r.kind, data: db.json(r.data as postgres.JSONValue) })))}`;
    return new Response(null, { status: 204 });
  } catch (e) {
    console.error("cross log: insert failed", e);
    return Response.json({ code: "failed" }, { status: 502 });
  }
}
