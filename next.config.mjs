/** @type {import('next').NextConfig} */
const nextConfig = {
  // The free "Check your state" page for The Ultimate Teacher Escape Plan is a static site in public/teachers/.
  // Crosswise too: public/crosswise/index.html, built by ~/Self/idea-generator-2/artifact/build.py.
  async rewrites() {
    return [
      { source: '/teachers', destination: '/teachers/index.html' },
      { source: '/crosswise', destination: '/crosswise/index.html' },
      // Daily Cube: public/cube/index.html, its results through /api/cube.
      { source: '/cube', destination: '/cube/index.html' },
    ];
  },
  // Crosswise lived at /cross until 23 Nov: old links still land on it.
  async redirects() {
    return [
      { source: '/cross', destination: '/crosswise', permanent: true },
      { source: '/cross/:path*', destination: '/crosswise/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
