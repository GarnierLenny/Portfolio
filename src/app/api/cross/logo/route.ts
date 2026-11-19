// A competitor's site icon for Crosswise's cards (/api/cross/logo?d=rover.com), from DuckDuckGo's icon service.
// DuckDuckGo answers a made-up domain with a grey placeholder the browser can't tell from a real logo, but with a 404:
// passing that 404 on lets the card drop the image. Visitors' browsers never call DuckDuckGo themselves.

const DOMAIN = /^[a-z0-9-]+(\.[a-z0-9-]+)+$/;
const CACHE = "public, max-age=86400, s-maxage=604800"; // logos barely change: a day in the browser, a week on Vercel

export async function GET(req: Request) {
  const d = (new URL(req.url).searchParams.get("d") ?? "").toLowerCase();
  if (d.length > 100 || !DOMAIN.test(d)) return new Response(null, { status: 400 });
  const res = await fetch(`https://icons.duckduckgo.com/ip3/${d}.ico`).catch(() => null);
  if (!res?.ok) return new Response(null, { status: 404, headers: { "cache-control": CACHE } });
  return new Response(res.body, {
    headers: { "content-type": res.headers.get("content-type") ?? "image/x-icon", "cache-control": CACHE },
  });
}
