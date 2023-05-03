function Calc()
{
    var x = parseInt(document.Sum.number1.value); 
    if(x != 6)
    {
        document.Sum.result.value = (Math.pow(x,2)+4)/(x-6);
    }
    else 
    {
        document.Sum.result.value = "Число не входит в область определения"
    }
}
function FindNum()
{
    var number = document.Sum.number1.value;
    var number2 = 0;
    if(number.indexOf(number2) != -1 && number.length == 3)
    {
        document.Sum.result.value = "Есть число 0";
    }
    else
    {
        document.Sum.result.value = "Нет числа 0";
    }
}
function Price()
{
    var priceOne = parseInt(document.Sum.number1.value);
    var shopOne = " в Магазине 1";
    var priceTwo = parseInt(document.Sum.number2.value);
    var shopTwo = " в Магазине 2";
    var priceThree = parseInt(document.Sum.number3.value);
    var shopThree = " в Магазине 3";
    var max = 0;
    var result = "";

    if (priceOne > max) {
        max = priceOne;
        result = shopOne;
    } else if (priceOne == max) {
        result += " и" + shopOne;
    }

    if (priceTwo > max) {
        max = priceTwo;
        result = shopTwo;
    } else if (priceTwo == max) {
        result += " и" + shopTwo;
    }

    if (priceThree > max) {
        max = priceThree;
        result = shopThree;
    } else if (priceThree == max) {
        result += " и" + shopThree;
    }

    document.Sum.result.value = max + result;
}
function Month()
{
    var x = parseInt(document.Sum.number1.value);
    var month;
    switch(x)
    {
        case 1:
            {
                month = "Январь"
                break;
            }
        case 2:
            {
                month = "Февраль"
                break;
            }
        case 3:
            {
                month = "Март"
                break;
            }
        case 4:
            {
                month = "Апрель"
                break;
            }
        case 5:
            {
                month = "Май"
                break;
            }
        case 6:
            {
                month = "Июнь"
                break;
            }
        case 7:
            {
                 month = "Июль"
                break;
            }
        case 8:
            {
                month = "Август"
                break;
            }
        case 9:
            {
                month = "Сентябрь"
                break;
            }
        case 10:
            {
                month = "Октябрь"
                break;
            }
        case 11:
            {
                month = "Ноябрь"
                break;
            }
        case 10:
            {
                month = "Октябрь"
                break;
            }
        case 10:
            {
                month = "Декабрь"
                break;
            }
        default:
            {
                month = "Ошибка ввода"
            }
    }
    document.Sum.result.value = month;
}