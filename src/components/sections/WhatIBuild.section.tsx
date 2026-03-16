"use client";

const blocks = [
  {
    icon: "⭐",
    title: "AI SaaS MVP",
    description:
      "I help startups turn ideas into production-ready MVPs using modern, scalable stacks.",
    items: [
      "Authentication",
      "APIs",
      "AI features",
      "Payments",
      "Database architecture",
    ],
    stack: "TypeScript • NestJS • PostgreSQL",
  },
  {
    icon: "🤖",
    title: "AI Integrations",
    description:
      "Add LLM-powered features to your existing product — fast and production-ready.",
    items: [
      "AI assistants",
      "Automated workflows",
      "AI-generated content",
      "Recommendation systems",
    ],
    stack: "OpenAI / Gemini • Node.js • APIs",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications built with React Native for any audience.",
    items: [
      "Startup MVPs",
      "Productivity apps",
      "Consumer apps",
      "AI mobile assistants",
    ],
    stack: "React Native • Expo • TypeScript",
  },
  {
    icon: "💪",
    title: "Scalable Backend",
    description:
      "Production-ready backend systems designed to scale from day one.",
    items: [
      "REST APIs",
      "Authentication",
      "Database architecture",
      "Caching & integrations",
    ],
    stack: "NestJS • PostgreSQL • Prisma • Docker",
  },
];

export default function WhatIBuild() {
  return (
    <section className="w-full px-6 py-10 md:py-14">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
            What I build
          </h2>
          <p className="text-slate-400 text-base max-w-xl md:mx-0 mx-auto">
            Here&apos;s what I can ship for you, from idea to production.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="
                flex flex-col gap-2 p-4 rounded-2xl
                bg-white/5 border border-white/10
                hover:bg-white/8 hover:border-white/20
                transition-all duration-300
              "
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-2">
                <span className="text-2xl">{block.icon}</span>
                <h3 className="text-base font-bold text-white">
                  {block.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs leading-relaxed">
                {block.description}
              </p>

              {/* Items */}
              <ul className="flex flex-wrap gap-x-3 gap-y-0.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="text-slate-400 text-xs flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <p className="pt-2 border-t border-white/10 text-xs text-slate-500 font-mono">
                {block.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
