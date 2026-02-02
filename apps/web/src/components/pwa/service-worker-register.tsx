'use client';

import { useEffect } from 'react';

const SERVICE_WORKER_PATH = '/sw.js';

export default function ServiceWorkerRegister() {
    useEffect(() => {
        if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
            return;
        }

        let isUnmounted = false;

        const register = async () => {
            try {
                await navigator.serviceWorker.register(SERVICE_WORKER_PATH);
            } catch (error) {
                if (process.env.NODE_ENV !== 'production') {
                    console.error('Service worker registration failed', error);
                }
            }
        };

        if (document.readyState === 'complete') {
            void register();
        } else {
            const onLoad = () => {
                if (!isUnmounted) {
                    void register();
                }
            };
            window.addEventListener('load', onLoad, { once: true });

            return () => {
                isUnmounted = true;
                window.removeEventListener('load', onLoad);
            };
        }

        return () => {
            isUnmounted = true;
        };
    }, []);

    return null;
}
