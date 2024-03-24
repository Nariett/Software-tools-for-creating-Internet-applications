<?php
$week = array(
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
);

$currentDayOfWeek = date('w'); 
echo 'Сегодня ' . $week[$currentDayOfWeek] . '<br>';

$date2003 = strtotime('2003-06-09'); 
$dayOfWeek2003 = date('w', $date2003); 
echo '09.06.2003 был ' . $week[$dayOfWeek2003] . '<br>';

$dateOfBirth = strtotime('2004-09-07'); 
$dayOfWeekOfBirth = date('w', $dateOfBirth); 
echo 'Мой день рождения был в ' . $week[$dayOfWeekOfBirth];
?>
