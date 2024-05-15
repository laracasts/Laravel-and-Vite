import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import manifestSRI from 'vite-plugin-manifest-sri';

export default defineConfig({
    plugins: [
        laravel({
            buildDirectory: 'bundle',
            hotFile: 'storage/vite.hot',
            input: [
                // 'resources/css/app.css', 
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        manifestSRI(),
    ],
    build: {
        manifest: 'assets.json',
    },
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
