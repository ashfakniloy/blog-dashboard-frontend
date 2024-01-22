/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        // hostname: "**",
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // hostname: "**",
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        // hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
