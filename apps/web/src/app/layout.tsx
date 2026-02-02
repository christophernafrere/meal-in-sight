import type { Metadata, Viewport } from 'next';
import StyledComponentsRegistry from '@/lib/registery';
import GlobalStyles from './global-styles';
import TabBar from '@/layouts/tab-bar';
import ServiceWorkerRegister from '@/components/pwa/service-worker-register';

export const metadata: Metadata = {
    title: {
        default: 'Meal in Sight',
        template: '%s | Meal in Sight',
    },
    description:
        'Meal In Sight propose des expériences culinaires immersives avec assistance en réalité augmentée.',
    applicationName: 'Meal in Sight',
    manifest: '/manifest.webmanifest',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Meal in Sight',
    },
    formatDetection: {
        telephone: false,
    },
    icons: {
        icon: [
            {
                url: '/favicon-16x16.png',
                type: 'image/png',
                sizes: '16x16',
            },
            {
                url: '/favicon-32x32.png',
                type: 'image/png',
                sizes: '32x32',
            },
            {
                url: '/android-chrome-192x192.png',
                type: 'image/png',
                sizes: '192x192',
            },
            {
                url: '/android-chrome-512x512.png',
                type: 'image/png',
                sizes: '512x512',
            },
        ],
        apple: [
            {
                url: '/apple-touch-icon.png',
                type: 'image/png',
                sizes: '180x180',
            },
        ],
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: '#f97316',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    <ServiceWorkerRegister />
                    {children}
                    <TabBar />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
