/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinifyMode: true,
  images: {
    remotePatterns: [
      {hostname: 'res.cloudinary.com'},{hostname: 'cdn.pixabay.com'}
    ]
  }
};

export default nextConfig;