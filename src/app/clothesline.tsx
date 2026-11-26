"use client";
// The landing's links, hung on a drying cord that runs the full width of the screen. On arrival the cord draws itself
// across, left to right, and each tag fades onto it as the line passes. Then a light breeze keeps them swaying, about
// a degree, the gusts crossing left to right. Hovering a link tag grows and lights it (globals.css).
// Reduced motion: the cord and tags are simply there. Keyboard focus never moves anything.
import { useEffect, useId, useRef } from "react";

type Tag = { href?: string; name: string; line: string; cta?: string; bg: string; ink: string; glow?: string; mark: "cubble" | "crosswise" | "soon" };
const TAGS: Tag[] = [
  { href: "/cubble", name: "Cubble", line: "A daily memory puzzle", cta: "Play", bg: "#ffe7d9", ink: "#7a3a14", glow: "255 128 80", mark: "cubble" },
  { href: "/crosswise", name: "Crosswise", line: "Cross two worlds into app ideas", cta: "Try", bg: "#e6effc", ink: "#0b3f8a", glow: "60 120 255", mark: "crosswise" },
  { name: "Coming soon", line: "Work in progress", bg: "#fbfbfa", ink: "#55615e", mark: "soon" },
];
const TAG_W = "min(200px, 29vw - 10px)"; // three tags and their gaps fit on a phone
const CORD_Y = 12;
const DRAW_MS = 1100; // the cord drawing across the screen

function Mark({ kind }: { kind: Tag["mark"] }) {
  const id = useId();
  const size = "size-8 md:size-12";
  if (kind === "cubble")
    return (
      <svg viewBox="-50 -50 100 100" className={size} aria-hidden="true">
        <g stroke="#ec7a4e" strokeWidth="4" strokeLinejoin="round">
          <polygon points="0,-44 40,-22 0,0 -40,-22" fill="#ffdcc6" />
          <polygon points="-40,-22 0,0 0,44 -40,22" fill="#ffb48e" />
          <polygon points="40,-22 0,0 0,44 40,22" fill="#ff956a" />
        </g>
      </svg>
    );
  if (kind === "crosswise")
    return (
      <svg viewBox="10 10 60 60" className={size} aria-hidden="true">
        <defs><clipPath id={id}><rect x="12" y="16" width="34" height="34" rx="9" /></clipPath></defs>
        <rect x="12" y="16" width="34" height="34" rx="9" fill="#0a66e0" />
        <rect x="34" y="30" width="34" height="34" rx="9" fill="#af52de" />
        <rect x="34" y="30" width="34" height="34" rx="9" fill="#4b2ca8" clipPath={`url(#${id})`} />
      </svg>
    );
  return (
    <svg viewBox="0 0 48 48" className={size} aria-hidden="true">
      <rect x="6" y="6" width="36" height="36" rx="10" fill="none" stroke="#9aa5a1" strokeWidth="2.5" strokeDasharray="5 5" />
      <path d="M24 17v14M17 24h14" stroke="#9aa5a1" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Clothesline() {
  const box = useRef<HTMLDivElement>(null);
  const cord = useRef<SVGPathElement>(null);
  const tags = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = box.current!, still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = el.clientWidth;
    const restSag = () => Math.min(40, Math.max(18, w * 0.025));
    // Each tag is a slow, well-damped pendulum: about 1.6 s a swing, barely an overshoot. At rest none hangs
    // quite square, the way real tags don't.
    const s = TAGS.map((_, i) => ({ rest: [-0.018, 0.012, 0.022][i], a: 0, v: 0 }));
    s.forEach((p) => { p.a = p.rest; });
    const sag = { y: restSag(), v: 0 };
    let raf = 0, last = 0;

    // Where each peg sits: around the middle of the screen, one tag width and a gap apart.
    const spots = () => {
      const tw = tags.current[0]?.firstElementChild?.nextElementSibling?.clientWidth ?? 160;
      const gap = Math.max(16, Math.min(56, w * 0.035));
      return TAGS.map((_, i) => w / 2 + (i - 1) * (tw + gap));
    };
    const paint = () => {
      cord.current!.setAttribute("d", `M0 ${CORD_Y} Q ${w / 2} ${CORD_Y + 2 * sag.y} ${w} ${CORD_Y}`);
      spots().forEach((x, i) => {
        const t = x / w, y = CORD_Y + 4 * sag.y * t * (1 - t);
        const node = tags.current[i];
        if (node) node.style.transform = `translate(${x}px, ${y}px) rotate(${s[i].a}rad)`;
      });
    };
    const step = (now: number) => {
      const dt = Math.min(0.032, (now - (last || now)) / 1000) || 0.016;
      last = now;
      const t = now / 1000;
      s.forEach((p, i) => {
        // A few slow, unrelated waves make a breeze that never quite repeats, about a degree; each tag gets it a
        // beat after the one to its left.
        const ph = i * 0.9;
        const wind = 0.018 * (0.55 * Math.sin(t * 0.9 - ph) + 0.3 * Math.sin(t * 1.7 - 1.3 * ph + 1) + 0.15 * Math.sin(t * 0.37 - ph));
        p.v += (-16 * (p.a - p.rest - wind) - 3.2 * p.v) * dt; p.a += p.v * dt;
      });
      const target = restSag() + 1.2 * Math.sin(t * 0.6); // the cord breathes with it
      sag.v += (-60 * (sag.y - target) - 12 * sag.v) * dt; sag.y += sag.v * dt;
      paint();
      raf = requestAnimationFrame(step); // the breeze never stops; rAF itself pauses in a hidden tab
    };
    const wake = () => { if (!raf && !still) raf = requestAnimationFrame(step); };

    const ro = new ResizeObserver(() => { w = el.clientWidth; sag.y = restSag(); paint(); });
    ro.observe(el);
    paint();

    // Arrival: the cord draws across, and each tag fades onto it as the line reaches its peg, with a slight sway.
    const timers: ReturnType<typeof setTimeout>[] = [];
    if (still) el.dataset.on = "";
    else {
      void el.getBoundingClientRect(); // commit the undrawn cord first, so the draw transitions from it
      el.dataset.drawn = "";
      spots().forEach((x, i) => timers.push(setTimeout(() => {
        tags.current[i]?.setAttribute("data-on", "");
        s[i].v = 0.15; wake(); // about 2 degrees, once, then the breeze takes over
      }, 120 + DRAW_MS * 0.85 * (x / w))));
    }

    return () => { timers.forEach(clearTimeout); cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    // Full bleed: the cord runs from one edge of the screen to the other.
    <div ref={box} className="line relative left-1/2 w-screen -translate-x-1/2" style={{ height: `calc(${TAG_W} * 1.22 + 80px)` }}>
      <svg className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
        <path ref={cord} pathLength={1} className="cord" fill="none" stroke="#a39787" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {TAGS.map((tag, i) => {
        const body = (
          <>
            <Mark kind={tag.mark} />
            <span className="text-[15px] md:text-2xl font-bold leading-tight">{tag.name}</span>
            <span className="text-xs md:text-base leading-snug opacity-80">{tag.line}</span>
            {tag.cta && <span className="mt-auto text-xs md:text-base font-medium">{tag.cta} →</span>}
          </>
        );
        const cls = `tag ${tag.href ? "" : "soon"} absolute left-0 top-[4px] flex flex-col gap-1.5 md:gap-2 rounded-xl md:rounded-2xl p-3 pt-5 md:p-5 md:pt-7 no-underline`;
        const style = { width: TAG_W, aspectRatio: "1 / 1.22", background: tag.bg, color: tag.ink, "--glow": tag.glow } as React.CSSProperties; // --glow: the hover glow, as r g b
        return (
          <div key={tag.name} ref={(n) => { tags.current[i] = n; }} className="hang absolute left-0 top-0 w-0 origin-top" style={{ willChange: "transform" }}>
            {/* The peg, clamping the tag's top edge onto the cord. */}
            <span aria-hidden="true" className="absolute -left-[4px] -top-[8px] z-10 h-[22px] w-[8px] rounded-[3px] bg-[#cfa57a] shadow-[inset_-2px_0_0_rgb(0_0_0/0.12)]" />
            {tag.href ? <a href={tag.href} className={cls} style={style}>{body}</a> : <div className={cls} style={style}>{body}</div>}
          </div>
        );
      })}
    </div>
  );
}
