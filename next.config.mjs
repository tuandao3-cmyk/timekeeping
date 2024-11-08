/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['www.thermaxglobal.com', 'hyracap.s3.amazonaws.com'],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    });
    return config;
  },
};

export default nextConfig;
