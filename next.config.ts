import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakeapi.net",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
