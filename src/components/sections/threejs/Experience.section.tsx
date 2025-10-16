"use client";

export default function Experience() {
  const experiences = [
    {
      period: "May 2025 - Nov 2025",
      company: "Polyconseil",
      location: "Paris, France",
      role: "Full-Stack Developer",
      type: "Internship",
      description: "Building scalable web applications with modern technologies",
      skills: ["Frontend", "Backend"],
    },
    {
      period: "Sept 2024 - Feb 2025",
      company: "Racemappr",
      location: "Berlin, Germany",
      role: "Mobile/Full-Stack Developer",
      type: "Part-time",
      description: "Developing cross-platform mobile applications",
      skills: ["Mobile", "Backend"],
    },
    {
      period: "Apr 2023 - Aug 2023",
      company: "Feelbat",
      location: "Reunion Island",
      role: "Mobile/Full-Stack Developer",
      type: "Internship",
      description: "Created mobile solutions for energy management",
      skills: ["Mobile", "Frontend"],
    },
    {
      period: "Sept 2022 - Mar 2023",
      company: "Epitech",
      location: "Reunion Island",
      role: "Pedagogical Assistant",
      type: "Part-time",
      description: "Mentored students in software development practices",
      skills: ["Frontend", "DevOps"],
    },
    {
      period: "Aug 2021 - Dec 2021",
      company: "Solarplexus",
      location: "Reunion Island",
      role: "Software Engineer",
      type: "Internship",
      description: "Developed internal tools and database solutions",
      skills: ["Database", "Backend"],
    },
  ];

  return (
    <div className="min-h-screen py-32 px-6 md:px-12">
      <div className="max-w-2xl">
        {/* Section title */}
        <div className="mb-24">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4">
            Professional Journey
          </p>
          <h2 className="text-5xl md:text-7xl font-light text-white">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-24 relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/20" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              {/* Dot on timeline */}
              <div className="absolute left-0 top-2 w-2 h-2 bg-white transform -translate-x-[3.5px]" />

              {/* Content */}
              <div className="space-y-4 group cursor-pointer">
                {/* Period and location */}
                <div className="flex flex-wrap gap-4 text-sm text-white/60">
                  <span className="tracking-wider">{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                {/* Company and role */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-white/80 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-white/70 mt-1">
                    {exp.role} <span className="text-white/50">/ {exp.type}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed max-w-xl">
                  {exp.description}
                </p>

                {/* Skills - connected to constellation */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs tracking-wider text-white/70 border border-white/30 px-3 py-1 hover:border-white/50 hover:text-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download resume CTA */}
        <div className="mt-32 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white text-sm tracking-widest uppercase border border-white/30 px-8 py-4 hover:bg-white/10 transition-all duration-300"
          >
            Download Resume
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
