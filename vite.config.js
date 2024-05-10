import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // 'resources/css/app.css', 
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve : {
        alias: {
            '@comps': '/resources/js/components',
            '@css': '/resources/css',
            '@images': '/resources/images'
        }

        // alias: [
        //     {
        //         find: '@css',
        //         replacement: '/resources/css'
        //     },
        //     {
        //         find: '@comps',
        //         replacement: '/resources/js/components'
        //     }
        // ]
    }
});
