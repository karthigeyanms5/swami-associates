/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'swami-associates.in',
          },
        ],
      },
};

export default nextConfig;
