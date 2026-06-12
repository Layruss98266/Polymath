/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  // Expose Next's build id to the client so the service-worker registrar can
  // namespace its cache per release. Vercel sets a stable id per deploy.
  env: {
    NEXT_PUBLIC_BUILD_ID: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 8)
      || process.env.NEXT_PUBLIC_BUILD_ID
      || String(Date.now())
  }
};
export default nextConfig;
