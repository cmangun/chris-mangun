/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["v0.blob.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
  output: "standalone",
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

