// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `e-commerce-test.sgp1.digitaloceanspaces.com`,
      },
      {
        protocol: "https",
        hostname: `bongoz.syd1.digitaloceanspaces.com`,
      },
      {
        protocol: "https",
        hostname: `bongozfilms.com`,
      },
      
    ],
  },
};

export default nextConfig;
