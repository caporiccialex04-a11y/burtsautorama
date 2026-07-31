import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Match original WordPress routes so bookmarks / old links don't 404
  async redirects() {
    return [
      { source: "/our-team", destination: "/about", permanent: true },
      { source: "/our-team/", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      {
        source: "/listings/:slug",
        destination: "/inventory/:slug",
        permanent: true,
      },
      {
        source: "/listings/:slug/",
        destination: "/inventory/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
