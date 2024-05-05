<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{env('APP_NAME')}}</title>

        @vite(['resources/js/app.js'])
    </head>
    <body class="bg-slate-900 text-slate-400">
        <div id="app" class="w-full"></div>
    </body>
</html>
