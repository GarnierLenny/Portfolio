/** @type {import('next').NextConfig} */
const nextConfig = {
  // The free "Check your state" page for The Ultimate Teacher Escape Plan is a static site in public/teachers/.
  async rewrites() {
    return [{ source: '/teachers', destination: '/teachers/index.html' }];
  },
};

export default nextConfig;
