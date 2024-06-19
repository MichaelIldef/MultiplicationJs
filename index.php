<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication Table</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <h1>Multiplication Table</h1>
    </div> 
    <div class= "body">
    
    <script type="text/javascript">
        function redirectToMultiplicationTable(size)
        {
            window.location = './' + size + '.php';
        }
    </script>

    <button onclick="redirectToMultiplicationTable('5');">5x5 Table</button>
    <br><br>
    <button onclick="redirectToMultiplicationTable('10');">10x10 Table</button>
    <br><br>
    <button onclick="redirectToMultiplicationTable('12');">12x12 Table</button>
    </div>

</body>
</html>