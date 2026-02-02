import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Meal in Sight',
        short_name: 'MealSight',
        description:
            'Meal In Sight apporte des recettes immersives avec assistance en réalité augmentée.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#f8f8f8',
        theme_color: '#f97316',
        lang: 'fr',
        categories: ['food', 'lifestyle', 'education'],
        icons: [
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    };
}
