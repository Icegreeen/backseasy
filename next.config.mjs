/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
