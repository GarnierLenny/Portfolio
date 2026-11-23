import Anthropic from "@anthropic-ai/sdk";

// Crosswise, the crossing tool (public/crosswise/index.html) asks Claude through here, on Lenny's API key.
// Three guards keep the bill small: CALLS_PER_DAY per visitor, MAX_PROMPT and max_tokens per call, and the monthly
// spend limit set on the key's workspace in the Anthropic Console, which is the real ceiling.
// CROSS_MODEL switches the model from Vercel's settings, then Redeploy (default Haiku 5.5, the cheapest).

const MODEL = process.env.CROSS_MODEL || "claude-haiku-5-5";
const CALLS_PER_DAY = 20; // a cross or a branch is 2 calls (ideas, then their ratings): about 10 a day
const MAX_PROMPT = 20_000; // characters; the tool's longest prompt is well under half that

// ponytail: per-instance memory, so a visitor landing on a fresh instance gets a fresh count. The Console spend
// limit caps the worst case; move this to a shared store (Upstash) if abuse ever shows up in the bill.
const seen = new Map<string, { day: string; calls: number }>();

const client = new Anthropic(); // ANTHROPIC_API_KEY, set in Vercel

// Six ideas take longer than Vercel's 10-second default (it answered 504 on the first live cross). 60 is the
// Hobby plan's ceiling.
export const maxDuration = 60;

export async function POST(req: Request) {
  const { prompt } = await req.json().catch(() => ({}));
  if (typeof prompt !== "string" || !prompt || prompt.length > MAX_PROMPT) {
    return Response.json({ code: "bad_request" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  const mine = seen.get(ip);
  const count = mine?.day === day ? mine.calls : 0;
  if (count >= CALLS_PER_DAY) return Response.json({ code: "daily_limit" }, { status: 429 });
  seen.set(ip, { day, calls: count + 1 });

  try {
    const res = await client.messages.create({
      model: MODEL,
      // Thinking counts toward max_tokens: at 8,000 and the default effort, Haiku thought its way past the limit and the
      // ideas came back cut off (17 Nov). Low effort keeps a cross quicker and cheaper; 16,000 leaves room either way.
      max_tokens: 16000,
      output_config: { effort: "low" },
      messages: [{ role: "user", content: `${prompt}\n\nAnswer with the JSON only, no other text.` }],
    });
    if (res.stop_reason === "refusal") return Response.json({ code: "refused" }, { status: 422 });
    if (res.stop_reason === "max_tokens") {
      console.error("cross: answer cut off at max_tokens", res.usage);
      return Response.json({ code: "failed" }, { status: 502 });
    }
    const text = res.content.map((b) => (b.type === "text" ? b.text : "")).join("");
    return Response.json({ text });
  } catch (e) {
    // The workspace spend limit or an empty balance comes back as a 400 that names it.
    if (e instanceof Anthropic.BadRequestError && /credit|usage limit|spend/i.test(e.message)) {
      return Response.json({ code: "out_of_credit" }, { status: 402 });
    }
    if (e instanceof Anthropic.RateLimitError) return Response.json({ code: "rate_limited" }, { status: 429 });
    console.error("cross: Claude failed", e);
    return Response.json({ code: "failed" }, { status: 502 });
  }
}
