/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/webp"],
  },
  // Allow .png files to be served as images
};

export default nextConfig;
