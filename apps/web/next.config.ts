import type { NextConfig } from 'next';
import withPWAInit from 'next-pwa';
import runtimeCaching from 'next-pwa/cache';

const withPWA = withPWAInit({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
    runtimeCaching,
});

const nextConfig: NextConfig = {
    reactCompiler: true,
    compiler: {
        styledComponents: true,
    },
};

export default withPWA(nextConfig);
