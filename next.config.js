
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-hook-mousetrap'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'firdausfauzi.com',
      },
    ]
  },
  distDir: 'build',
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 4
  }
}

module.exports = nextConfig
