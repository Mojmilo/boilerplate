/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['avatars.githubusercontent.com', 'api.dicebear.com'],
    },
    env: {
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    },
};

export default nextConfig;
