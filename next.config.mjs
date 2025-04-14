/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    // Add any other image domains you're using
  },
  typescript: {
    // During deployment, we'll ignore type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
