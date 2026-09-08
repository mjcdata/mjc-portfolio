/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/mjc-portfolio' : '',
  assetPrefix: isProd ? '/mjc-portfolio/' : '',
};

export default nextConfig;
