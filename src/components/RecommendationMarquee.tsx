"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const recommendations = [
  {
    name: "Théo Velon",
    role: "Full Stack Developer",
    text: "Responsiveness and team spirit make him a highly valued colleague.",
  },
  {
    name: "Dylan Francillette",
    role: "UX/UI Designer",
    text: "Lenny is proactive and doesn't hesitate to propose new ideas.",
  },
  {
    name: "Raphaël Anic-Antic",
    role: "Engineering Manager",
    text: "In his developments, he is fast, efficient, and results-oriented.",
  },
  {
    name: "Théo Velon",
    role: "Full Stack Developer",
    text: "Excellent ability to learn and rapid adaptation when joining a project.",
  },
  {
    name: "Paolo Le Vaillant",
    role: "Product Manager",
    text: "A rigorous profile who knows how to explain his work to multidisciplinary teams.",
  },
];

export default function RecommendationMarquee() {
  return (
    <div className="absolute bottom-6 left-0 w-full overflow-hidden">
      <Marquee
        gradient={true}
        gradientColor="#0f172a"
        gradientWidth={80}
        speed={25}
      >
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="flex flex-col gap-1.5 mx-3 p-4 w-[280px] rounded-xl bg-slate-950/40 border border-white/5 backdrop-blur-sm"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">{rec.name}</span>
              <span className="text-[10px] text-indigo-400 font-medium">
                {rec.role}
              </span>
            </div>

            <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
              &quot;{rec.text}&quot;
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
