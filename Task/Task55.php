<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 55</title>
</head>
<body>
    <form method="post">
        <input type="checkbox" name="checkbox"> Отметить<br>
        <input type="submit" name="submit" value="Отправить">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        if (isset($_POST['checkbox'])) {
            echo "Чекбокс отмечен";
        } else {
            echo "Чекбокс не отмечен";
        }
    }
    ?>
</body>
</html>
