/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['avatars.githubusercontent.com', 'api.dicebear.com'],
    }
};

export default nextConfig;
