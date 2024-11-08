/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['www.thermaxglobal.com', 'hyracap.s3.amazonaws.com'],
  },
};

export default nextConfig;
