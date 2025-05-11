/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable tracing to avoid permission issues with .next/trace
  generateBuildId: async () => {
    return 'build-' + new Date().getTime();
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
