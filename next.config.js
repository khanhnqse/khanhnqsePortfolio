/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable tracing to avoid permission issues with .next/trace
  generateBuildId: async () => {
    return 'build-' + new Date().getTime();
  },
  images: {
    domains: ['khanhnqse-portfolio.vercel.app'],
    unoptimized: true
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/**/*',
      ],
    },
  },
}

module.exports = nextConfig
