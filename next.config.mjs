/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/spanish-classes-malaga',
  images: {
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig; 