<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        @vite(['resources/js/app.js', 'resources/css/app.css'])
    </head>
    <body class="bg-slate-900 text-slate-400">
        <div class="text-center pt-10">
            <h1 class="text-3xl font-extrabold text-slate-200">
                Laracasts
            </h1>
            <h4 class="text-xl pt-3">
                Laravel and Vite
            </h4>
        </div>
        <div class="flex justify-center items-center pt-12">
            <img 
                class="object-fill h-96"
                src="{{ Vite::image('logo.png')}}" alt="">
        </div>
    </body>
</html>
