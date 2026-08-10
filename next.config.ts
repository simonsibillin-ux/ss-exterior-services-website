import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/services/pressure-washing-kilmore", destination: "/services/surface-pressure-washing-kilmore", permanent: true },
      { source: "/services/commercial-exterior-cleaning", destination: "/services/commercial-exterior-cleaning-mitchell-shire", permanent: true },
    ];
  },
};

export default nextConfig;
