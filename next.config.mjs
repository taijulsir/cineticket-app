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
        hostname: `cineticket.com`,
      },

      // External image hosts used across the site
      {
        protocol: "https",
        hostname: `image.tmdb.org`,
      },
      {
        protocol: "https",
        hostname: `images.unsplash.com`,
      },

    ],
  },
};

export default nextConfig;
