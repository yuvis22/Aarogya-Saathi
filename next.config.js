/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. Linting errors will now break the build.
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
