"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import createGlobe from "cobe";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import sea from "@/../public/sea.jpeg";
import SurfIcon from "@/../public/surf-icon.png";
import RejectCheckIcon from "@/../public/rejectcheck.png";

const EMAIL = "lenny.garnier00@gmail.com";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/**
 * Scroll-driven globe: starts far out over the Atlantic, then rotates and
 * zooms toward Réunion as the pinned section scrolls. Progress is read from
 * the section's position inside cobe's own render loop, so there is no
 * scroll listener and no React re-render per frame.
 */
function OriginGlobe() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const label = labelRef.current;
    if (!canvas || !section || !label) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // cobe's own "rotate to location" formula
    const locationToAngles = (lat: number, long: number): [number, number] => [
      Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ];
    const REUNION: [number, number] = [-21.1151, 55.5364];
    const [destPhi, destTheta] = locationToAngles(...REUNION);
    const startPhi = destPhi - 2.4;
    const startTheta = 0.12;

    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let width = canvas.offsetWidth;
    const ro = new ResizeObserver(() => {
      width = canvas.offsetWidth;
    });
    ro.observe(canvas);

    let globe: ReturnType<typeof createGlobe> | undefined;
    let raf = 0;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: startPhi,
        theta: startTheta,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 24000,
        mapBrightness: 5,
        baseColor: [0.04, 0.36, 0.39],
        markerColor: [1, 1, 1],
        glowColor: [0.97, 0.97, 0.96],
        scale: 0.7,
        markers: [{ location: REUNION, size: 0.04 }],
      });

      let drift = 0;
      const frame = () => {
        let raw = 1;
        if (!reduceMotion) {
          const rect = section.getBoundingClientRect();
          const total = rect.height - window.innerHeight;
          raw = Math.min(1, Math.max(0, -rect.top / total));
        }
        // Gentle spin while the section waits for the scroll to begin
        if (raw < 0.01 && !reduceMotion) drift += 0.002;
        const p = ease(raw);
        globe!.update({
          phi: startPhi + drift * (1 - p) + (destPhi - startPhi) * p,
          theta: startTheta + (destTheta - startTheta) * p,
          scale: 0.7 + 1.3 * p,
          width: width * 2,
          height: width * 2,
        });
        label.style.opacity = raw > 0.8 ? "1" : "0";
        raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    } catch {
      // No WebGL: keep the text, hide the empty canvas
      canvas.style.display = "none";
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      globe?.destroy();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[260vh]">
      <div className="sticky top-0 flex min-h-[100dvh] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-3xl font-black tracking-tight md:text-5xl">
                Where I come from.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-fog">
                Réunion is a small French island east of Madagascar: an active
                volcano, a lagoon, and weather with opinions. It&apos;s where I
                live, and it leaks into everything I make.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 max-w-md text-lg font-medium leading-relaxed text-ink">
                The ocean in Surf is this one.
              </p>
            </Reveal>
          </div>
          <div className="relative md:col-span-7">
            <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[2rem]">
              <canvas
                ref={canvasRef}
                className="size-full"
                aria-label="Globe zooming in on Réunion Island"
              />
              <div
                ref={labelRef}
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-ink shadow-[0_8px_30px_-12px_rgba(5,51,56,0.4)] ring-1 ring-ink/10 transition-opacity duration-700"
                style={{ opacity: 0 }}
              >
                Réunion Island
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SOCIALS = [
  {
    label: "X",
    href: "https://x.com/lennygrnr",
    icon: <FaXTwitter size={16} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/GarnierLenny",
    icon: <FaGithub size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lenny-garnier-2ab689199/",
    icon: <FaLinkedin size={16} />,
  },
];

const TRUE_THINGS = [
  "I don't build for the charts. I build for someone at 2am, wrestling a craving or an inbox full of no.",
  "My favorite thing I've shipped is a sentence: free forever, no account, nothing leaves your phone.",
  "I'd rather tell you your CV will get rejected than let you find out the usual way.",
  "I once built a cowboy standoff you play over webcam. I stand by it.",
];

function CellArrow({ ring }: { ring: string }) {
  return (
    <span
      className={`flex size-10 shrink-0 items-center justify-center rounded-full ring-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${ring}`}
    >
      <ArrowUpRight size={18} strokeWidth={1.75} />
    </span>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <div className="min-h-[100dvh] overflow-x-clip">
      {/* Nav */}
      <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <p className="font-display text-lg font-bold tracking-tight">
          Lenny Garnier
        </p>
        <nav className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={s.label}
              className="flex size-9 items-center justify-center rounded-full text-fog ring-1 ring-ink/10 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-ink hover:ring-ink/30 active:scale-95"
            >
              {s.icon}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pt-14 md:pt-20">
        <Reveal>
          <h1 className="font-display text-[2.6rem] font-black leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">
            Honest little apps, made on{" "}
            <span className="text-lagoon">a rock in the Indian Ocean.</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col justify-center gap-8 md:col-span-6">
            <Reveal delay={100}>
              <p className="max-w-md text-lg leading-relaxed text-fog">
                I&apos;m Lenny. By day I write code for other people. At night
                I make apps for the bad days.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3 rounded-full bg-lagoon py-2 pl-6 pr-2 font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-deep active:scale-[0.98]"
                >
                  Say hello
                  <span className="flex size-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </span>
                </a>
                <a
                  href="#apps"
                  className="rounded-full px-6 py-3.5 font-medium text-ink ring-1 ring-ink/15 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-ink/5 active:scale-[0.98]"
                >
                  See the apps
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
            <Reveal delay={140}>
              <figure className="md:rotate-[1.5deg] md:transition-transform md:duration-700 md:ease-[cubic-bezier(0.16,1,0.3,1)] md:hover:rotate-0">
                <div className="rounded-[1.75rem] bg-white p-2 shadow-[0_24px_60px_-30px_rgba(5,51,56,0.35)] ring-1 ring-ink/5">
                  <Image
                    src={sea}
                    alt="Lenny at the seaside"
                    priority
                    className="aspect-[4/3] w-full rounded-[calc(1.75rem-0.5rem)] object-cover"
                  />
                </div>
                <figcaption className="mt-3 pl-2 text-sm text-fog">
                  Never far from the water.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Where I come from */}
      <div className="mt-24 md:mt-32">
        <OriginGlobe />
      </div>

      {/* A few true things */}
      <section className="mx-auto max-w-[1200px] px-6 py-28 md:py-40">
        <Reveal>
          <h2 className="font-display text-3xl font-black tracking-tight md:text-5xl">
            A few true things.
          </h2>
        </Reveal>
        <div className="mt-14 flex flex-col gap-12 md:mt-20 md:gap-16">
          {TRUE_THINGS.map((thing, i) => (
            <Reveal
              key={thing}
              delay={i * 60}
              className={i % 2 === 1 ? "md:pl-[18%]" : ""}
            >
              <p className="max-w-[28ch] font-display text-2xl font-bold leading-snug tracking-tight md:text-4xl">
                {thing}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Things I make */}
      <section id="apps" className="mx-auto max-w-[1200px] px-6 pb-28 md:pb-40">
        <Reveal>
          <h2 className="font-display text-3xl font-black tracking-tight md:text-5xl">
            Things I make.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={0}>
            <Link
              href="/apps/surf"
              className="group relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#0a5c63_0%,#053338_55%,#04262b_100%)] p-7 text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 md:p-9"
            >
              <div className="flex items-start justify-between">
                <Image
                  src={SurfIcon}
                  alt="Surf app icon"
                  className="size-14 rounded-2xl object-cover"
                />
                <CellArrow ring="ring-white/25" />
              </div>
              <div className="mt-auto pt-16">
                <h3 className="font-display text-3xl font-bold tracking-tight">
                  Surf
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed opacity-80">
                  A 90-second dive for when a craving hits. You breathe, you
                  sink, the wave passes.
                </p>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/10 blur-3xl"
              />
            </Link>
          </Reveal>

          <Reveal className="md:col-span-5" delay={80}>
            <a
              href="https://rejectcheck.com"
              target="_blank"
              rel="noopener"
              className="group relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-[2rem] bg-white p-7 text-ink ring-1 ring-ink/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_24px_60px_-35px_rgba(5,51,56,0.4)] md:p-9"
            >
              <div className="flex items-start justify-between">
                <Image
                  src={RejectCheckIcon}
                  alt="RejectCheck app icon"
                  className="size-14 rounded-2xl object-cover"
                />
                <CellArrow ring="ring-ink/15" />
              </div>
              <div className="mt-auto pt-16">
                <h3 className="font-display text-3xl font-bold tracking-tight">
                  RejectCheck
                </h3>
                <p className="mt-3 max-w-[22rem] text-base leading-relaxed opacity-80">
                  Job hunting is a black box. RejectCheck opens it and shows
                  you why you&apos;d get rejected, before you hit send.
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Say hello */}
      <section className="mx-auto max-w-[1200px] px-6 pb-16">
        <div className="rounded-[2rem] bg-white px-7 py-16 ring-1 ring-ink/10 md:px-16 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl font-black tracking-tight md:text-6xl">
              Say hello.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-fog">
              The inbox is open. Tell me what you&apos;re building, or what
              the ocean looks like where you are.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="break-all font-display text-xl font-bold tracking-tight underline decoration-lagoon decoration-2 underline-offset-8 transition-colors hover:text-lagoon md:text-3xl"
              >
                {EMAIL}
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(EMAIL);
                  setCopied(true);
                }}
                aria-label="Copy email address"
                className="flex size-11 items-center justify-center rounded-full text-fog ring-1 ring-ink/15 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-ink hover:ring-ink/30 active:scale-95"
              >
                {copied ? (
                  <Check size={18} className="text-lagoon" />
                ) : (
                  <Copy size={18} />
                )}
              </button>
              <span
                aria-live="polite"
                className={`text-sm font-medium text-lagoon transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}
              >
                Copied
              </span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-ink/15 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-ink/5 hover:ring-ink/30 active:scale-95"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-6 pb-10 text-sm text-fog md:flex-row">
        <p>© 2026 Lenny Garnier</p>
        <p>Made on Réunion Island</p>
      </footer>
    </div>
  );
}
