"use client";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center py-32 px-6">
      <div className="max-w-4xl w-full">
        {/* Section title */}
        <div className="mb-24 text-center">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8">
            Let's Work
            <br />
            <span className="font-bold">Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Available for freelance projects and full-time opportunities
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Email */}
          <a
            href="mailto:lenny.garnier00@gmail.com"
            className="group border border-gray-800 p-8 hover:border-gray-600 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm text-gray-600 tracking-wider">EMAIL</span>
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all"
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
            </div>
            <p className="text-white text-xl group-hover:text-gray-300 transition-colors">
              lenny.garnier00@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/lenny-garnier"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-800 p-8 hover:border-gray-600 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm text-gray-600 tracking-wider">LINKEDIN</span>
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all"
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
            </div>
            <p className="text-white text-xl group-hover:text-gray-300 transition-colors">
              Connect on LinkedIn
            </p>
          </a>
        </div>

        {/* Social links - minimal */}
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/GarnierLenny"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors"
          >
            <span className="text-sm tracking-wider">GitHub</span>
          </a>
          <span className="text-gray-800">•</span>
          <a
            href="https://linkedin.com/in/lenny-garnier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors"
          >
            <span className="text-sm tracking-wider">LinkedIn</span>
          </a>
          <span className="text-gray-800">•</span>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors"
          >
            <span className="text-sm tracking-wider">Twitter</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2025 Lenny Garnier. All rights reserved.</p>
            <p>Made with ♥ in Reunion Island</p>
          </div>
        </div>
      </div>
    </div>
  );
}
