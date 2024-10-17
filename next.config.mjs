/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['openweathermap.org'],
  },
  webpack: (config, {_isServer}) => config,
};

export default nextConfig;
