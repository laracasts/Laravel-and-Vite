import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // 'resources/css/app.css', 
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    resolve : {
        alias: {
            '@comps': '/resources/js/components',
            '@css': '/resources/css'
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
