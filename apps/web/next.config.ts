import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    compiler: {
        styledComponents: true,
    },
    output: 'export',
};

export default nextConfig;
