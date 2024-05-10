<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        @viteReactRefresh
        @vite(['resources/js/app.jsx'])
    </head>
    <body class="bg-slate-900 text-slate-400">
        <div id="app"></div>
    </body>
</html>
