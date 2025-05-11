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
  // Special handling for images with uppercase extensions
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|JPG)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/images/',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig
