import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakeapi.net",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
