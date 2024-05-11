<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::macro('image', fn(string $asset) => $this->asset("resources/images/{$asset}"));

        Vite::useScriptTagAttributes([
            'integrity' => false,
            'async' => true,
            'data-custom-attribute' => 'whatever value we needed'
        ]);

        Vite::useScriptTagAttributes(fn (string $src, string $url, array|null $chunk, array|null $manifest) => [
            'data-custom-attribute' => $src === 'resources/js/app.js' ? false : true
        ]);

        Vite::useStyleTagAttributes([
            'data-css-theme' => 'dark',
        ]);
    }
}
