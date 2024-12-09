/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cqodqcdfgyjiqwolmjhy.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        pathname: "/img/wn/**",
      },
    ],
  },
};

export default nextConfig;
