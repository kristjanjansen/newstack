<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

</head>

<body>
    @production
    @vite
    @else
    <script type="module" src="http://localhost:3000/@@vite/client"></script>
    <script type="module" src="http://localhost:3000/resources/js/app.js"></script>
    @endproduction
</body>

</html>