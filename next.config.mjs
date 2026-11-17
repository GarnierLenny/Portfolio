/** @type {import('next').NextConfig} */
const nextConfig = {
  // The free "Check your state" page for The Ultimate Teacher Escape Plan is a static site in public/teachers/.
  // Cross two worlds too: public/cross/index.html, built by ~/Self/idea-generator-2/artifact/build.py.
  async rewrites() {
    return [
      { source: '/teachers', destination: '/teachers/index.html' },
      { source: '/cross', destination: '/cross/index.html' },
    ];
  },
};

export default nextConfig;
