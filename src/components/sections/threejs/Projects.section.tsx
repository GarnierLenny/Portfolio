"use client";

type ProjectsProps = {
  isVisible?: boolean;
};

export default function Projects({ isVisible = true }: ProjectsProps) {
  const projects = [
    {
      title: "PHAR",
      subtitle: "AI Music Mood Playlist Generator",
      description: "Generates personalized playlists based on your current mood using AI sentiment analysis",
      tech: ["React Native", "TypeScript", "AI/ML", "Spotify API"],
      link: "https://pharmusic.com/",
      status: "In Progress",
    },
    {
      title: "Timer Sequence",
      subtitle: "Custom Timer Application",
      description: "Create and manage custom sequences of timers for workouts and multi-step processes",
      tech: ["React Native", "TypeScript", "AsyncStorage"],
      github: "https://github.com/GarnierLenny/timer-sequence",
      status: "Completed",
    },
    {
      title: "Minimalist Calorie Tracker",
      subtitle: "Health & Nutrition App",
      description: "Distraction-free calorie and nutrition tracking with clean interface and quick-add shortcuts",
      tech: ["React Native", "TypeScript", "SQLite"],
      github: "https://github.com/GarnierLenny/minimalist-calorie-tracker",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen py-32 px-6 md:px-12">
      <div className="max-w-2xl">
        {/* Section title */}
        <div className="mb-24">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-5xl md:text-7xl font-light text-white">
            Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border-t border-white/20 pt-12 hover:border-white/40 transition-colors"
            >
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left - Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm text-white/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-white/60 border border-white/20 px-2 py-1">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-white group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 mt-2">{project.subtitle}</p>
                  </div>

                  <p className="text-white/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs text-white/60 tracking-wider"
                      >
                        {tech}
                        {i < project.tech.length - 1 && " •"}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Links */}
                <div className="flex flex-col justify-end space-y-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between text-white border border-white/20 px-6 py-4 hover:bg-white/5 transition-all"
                    >
                      <span className="text-sm tracking-wider">Visit Site</span>
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between text-white/70 border border-white/20 px-6 py-4 hover:border-white/40 hover:text-white transition-all"
                    >
                      <span className="text-sm tracking-wider">View Code</span>
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-32 text-center">
          <a
            href="https://github.com/GarnierLenny"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-sm tracking-widest uppercase border border-white/20 px-8 py-4 hover:bg-white/5 transition-all duration-300"
          >
            View All Projects
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
