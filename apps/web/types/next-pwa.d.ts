declare module 'next-pwa' {
    import type { NextConfig } from 'next';

    interface NextPWAOptions {
        dest?: string;
        disable?: boolean;
        register?: boolean;
        skipWaiting?: boolean;
        runtimeCaching?: unknown;
        buildExcludes?: Array<string | RegExp>;
        fallbacks?: Record<string, string>;
        extendDefaultRuntimeCaching?: boolean;
    }

    type WithPWA = (nextConfig?: NextConfig) => NextConfig;

    export default function withPWA(options?: NextPWAOptions): WithPWA;
}

declare module 'next-pwa/cache' {
    const runtimeCaching: unknown[];
    export default runtimeCaching;
}
