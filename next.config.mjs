/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: '@import "@/styles/main.scss";',
  },
};

export default nextConfig;
