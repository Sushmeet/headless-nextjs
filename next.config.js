/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //     domains: ["images.ctfassets.net"]
  // }
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
};

module.exports = nextConfig;
