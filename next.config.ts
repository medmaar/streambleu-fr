import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.streambleu.fr" }],
        destination: "https://streambleu.fr/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
