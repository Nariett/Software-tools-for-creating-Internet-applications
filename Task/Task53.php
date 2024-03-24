<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 53</title>
    <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid black;
          padding: 8px;
          text-align: left;
        }
        .highlight {
          background-color: yellow;
        }
      </style>
</head>
<body>
    <h2>Данные</h2>
        <?php
            $data = array(
              array('ФИО' => 'Пупкин Николай Алексеевич', 'возраст' => 17, 'пол' => 'мужской', 'образование' => 'высшее'),
              array('ФИО' => 'Гоблин Петр Николаевич', 'возраст' => 25, 'пол' => 'мужской', 'образование' => 'среднее'),
              array('ФИО' => 'Сидорова Елена Павловна', 'возраст' => 35, 'пол' => 'женский', 'образование' => 'высшее'),
              array('ФИО' => 'Смирнова Анна Владимировна', 'возраст' => 29, 'пол' => 'женский', 'образование' => 'высшее')
            );

            echo '<table>';
            echo '<tr><th>ФИО</th><th>Возраст</th><th>Пол</th><th>Образование</th></tr>';

            foreach ($data as $person) {
              echo '<tr>';
              foreach ($person as $key => $value) {
                if ($key == 'возраст' && $value > 30) {
                  echo "<td class='highlight'>$value</td>";
                } elseif ($key == 'пол' && $value == 'женский') {
                  echo "<td class='highlight'>$value</td>";
                } elseif ($key == 'образование' && $value == 'высшее') {
                  echo "<td class='highlight'>$value</td>";
                } else {
                  echo '<td>' . $value . '</td>';
                }
              }
              echo '</tr>';
            }

            echo '</table>';
?>
</body>
</html>