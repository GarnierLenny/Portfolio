import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FiGithub, FiGlobe } from "react-icons/fi";
import MonAmiChefLogo from "@/../public/monamichef_square.png";
import sc1 from "@/../public/monamichef/IMG_4444.png";
import sc2 from "@/../public/monamichef/IMG_4446.png";
import sc3 from "@/../public/monamichef/IMG_4448.png";
import sc4 from "@/../public/monamichef/IMG_4450.png";
import diagram from "@/../public/monamichef/monamichef-mermaid-diagram.png";

const stack = [
  { name: "React Native", role: "Mobile app", color: "#61dbfb" },
  { name: "Expo", role: "Build & distribution", color: "#ffffff" },
  { name: "TypeScript", role: "Everywhere", color: "#007acc" },
  { name: "NestJS", role: "REST API", color: "#e31b5f" },
  { name: "PostgreSQL", role: "Database", color: "#336791" },
  { name: "Prisma", role: "ORM", color: "#5a67d8" },
  { name: "Gemini API", role: "LLM", color: "#74aa9c" },
  { name: "Tailwind CSS", role: "Web dashboard", color: "#06b6d4" },
];

export default function MonAmiChefPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-20">

        {/* 1. Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm w-fit"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* 2. Hero */}
        <section className="flex flex-col gap-6">
          {/* Flagship label */}
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit">
            ⭐ Flagship Project
          </span>

          <div className="flex items-center gap-5">
            <Image
              src={MonAmiChefLogo}
              alt="MonAmiChef logo"
              className="size-20 rounded-2xl shadow-2xl"
            />
            <div>
              <h1 className="text-4xl font-bold">MonAmiChef</h1>
              <p className="text-slate-400 mt-1 text-lg">
                Your AI-powered personal chef
              </p>
            </div>
          </div>

          {/* Product summary */}
          <p className="text-slate-300 leading-relaxed max-w-2xl">
            MonAmiChef is an AI-powered cooking assistant that generates
            personalized recipes and meal plans based on user preferences,
            nutrition goals, and time constraints. Available on mobile and
            accessible via API on RapidAPI.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3">
            {[
              "Generates personalized recipes in seconds",
              "Designed to scale across mobile and web",
              "Production-ready AI backend",
            ].map((h) => (
              <span
                key={h}
                className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
              >
                {h}
              </span>
            ))}
          </div>

          {/* Badge + tech tags */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-full border border-green-500/50 text-green-400 bg-green-500/5">
              Live
            </span>
            {["React Native", "TypeScript", "NestJS", "Gemini API", "Tailwind"].map(
              (t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-medium"
                >
                  {t}
                </span>
              ),
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://monamichef.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold transition-all"
            >
              <FiGlobe size={14} /> Live Demo
            </a>
            <a
              href="https://github.com/MonAmiChef/MonAmiChef"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-bold transition-all border border-white/10"
            >
              <FiGithub size={14} /> GitHub
            </a>
            <a
              href="https://rapidapi.com/GarnierLenny/api/monamichef"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 rounded-lg text-sm font-bold transition-all border border-blue-500/30"
            >
              RapidAPI
            </a>
          </div>
        </section>

        {/* 3. The Problem */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">The Problem</h2>
          <p className="text-slate-400 leading-relaxed">
            Generic recipe apps don&apos;t know who you are. Whether you&apos;re trying to
            build muscle, eat low-carb, or cook something quick on a weeknight —
            every session starts from scratch. No preferences, no memory, no
            context. And when AI is involved, hallucinated ingredients or
            nutritionally inconsistent recipes make the problem worse for users
            with real health goals.
          </p>
        </section>

        {/* 4. The Solution */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">The Solution</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🎯",
                title: "Personalized preferences",
                desc: "Users define nutrition goals, cuisine preferences, meal occasion, and timing — once. Every recipe adapts to these constraints.",
              },
              {
                icon: "💬",
                title: "Conversational recipe generation",
                desc: "A structured AI chat surfaces relevant recipes instantly. Quick prompts like &quot;Quick dinner in 20 minutes&quot; or &quot;High protein&quot; get straight to the point.",
              },
              {
                icon: "📅",
                title: "Meal plan & grocery list",
                desc: "MonAmiChef generates weekly meal plans and the corresponding grocery list automatically — no manual planning needed.",
              },
              {
                icon: "🔁",
                title: "Chat history",
                desc: "Past recipe conversations are saved and accessible. Users can revisit previous meals or regenerate variations from old sessions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 p-5 rounded-2xl bg-white/5 border border-white/10"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Screenshots preview */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Screenshots</h2>
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col items-center gap-2">
              <Image
                src={sc2}
                alt="Chat screen"
                className="rounded-2xl w-48 shadow-2xl border border-white/10"
              />
              <span className="text-xs text-slate-500">AI Chat</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src={sc3}
                alt="Preference picker"
                className="rounded-2xl w-48 shadow-2xl border border-white/10"
              />
              <span className="text-xs text-slate-500">Preference Picker</span>
            </div>
          </div>
        </section>

        {/* 6. System Architecture */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">System Architecture</h2>
          <p className="text-slate-400 leading-relaxed">
            Both the mobile app and the web dashboard share the same backend
            API, ensuring consistent recipe generation, preferences, and chat
            history across platforms. The NestJS API is the single source of
            truth — it handles authentication, preference management, and all
            LLM calls.
          </p>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4">
            <Image
              src={diagram}
              alt="MonAmiChef architecture diagram"
              className="w-full rounded-xl"
            />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The API is also published on{" "}
            <a
              href="https://rapidapi.com/GarnierLenny/api/monamichef"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              RapidAPI
            </a>
            , making the recipe engine accessible for third-party integrations
            and developers who want to build on top of it.
          </p>
        </section>

        {/* 7. Tech Stack */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stack.map((s) => (
              <div
                key={s.name}
                className="flex flex-col gap-1 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="text-sm font-bold text-white">{s.name}</span>
                </div>
                <span className="text-xs text-slate-500">{s.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. AI Reliability */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">AI Reliability</h2>
          <p className="text-slate-400 leading-relaxed">
            AI hallucinations are a real problem in nutrition apps. MonAmiChef
            reduces unreliable outputs at the architecture level:
          </p>
          <ul className="flex flex-col gap-4">
            {[
              {
                icon: "🧱",
                title: "Structured JSON outputs",
                desc: "The LLM is instructed to return strict JSON. Responses are parsed and validated server-side before being stored or returned to the client.",
              },
              {
                icon: "🔒",
                title: "Prompt constraints from user preferences",
                desc: "Dietary restrictions, cuisine types, occasions, and timing are injected into the system prompt as explicit rules — scoping what the model can generate.",
              },
              {
                icon: "🎛️",
                title: "Predefined categories, not free generation",
                desc: "For cuisine type, occasion, and timing, the model selects from a fixed set of options rather than generating them freely — eliminating an entire class of inconsistent outputs.",
              },
              {
                icon: "📋",
                title: "Server-side validation",
                desc: "All LLM responses are validated against expected schemas on the backend before being forwarded to the client — malformed or incomplete outputs are rejected.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 9. Full Gallery */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Full Gallery</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { src: sc1, label: "Login" },
              { src: sc2, label: "AI Chat" },
              { src: sc3, label: "Preferences" },
              { src: sc4, label: "History" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 shrink-0"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  className="rounded-2xl w-44 shadow-2xl border border-white/10"
                />
                <span className="text-xs text-slate-500">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 10. What I learned */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">What I Learned</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Designing a shared API for mobile and web",
                desc: "Building a single NestJS backend consumed by both a React Native app and a web dashboard forced me to think carefully about API contracts — versioning, payload shapes, and consistency across clients.",
              },
              {
                title: "LLM reliability is an engineering problem",
                desc: "Making AI outputs trustworthy required the same rigor as any production system: typed schemas, server-side validation, and systematic prompt testing. Calling an API is the easy part.",
              },
              {
                title: "UX is the foundation of AI quality",
                desc: "The preference picker wasn't a nice-to-have — it was the backbone of reliable outputs. Structured user context injected at the prompt level made every generated recipe dramatically more relevant.",
              },
              {
                title: "Shipping a public API is a different discipline",
                desc: "Publishing on RapidAPI meant thinking about rate limiting, auth flows, and developer documentation in a way internal APIs don't require. A valuable exercise in building for external consumers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm w-fit pb-8"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>
      </div>
    </div>
  );
}
