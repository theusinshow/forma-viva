/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // Demo-only placeholder source (deterministic, grayscale editorial mood).
      // Swap to real architecture photos by changing the `src` in lib/projects.ts.
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};

export default nextConfig;
