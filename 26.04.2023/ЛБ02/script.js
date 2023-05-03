function ABC(){ 
    var a = parseInt(document.Sum.number1.value); 
    var b = parseInt(document.Sum.number2.value);  
    var c = parseInt(document.Sum.number3.value);  
    document.Sum.result.value = Number(Math.sqrt(2 * Math.pow(b,2) + 2 * Math.pow(c,2) - Math.pow(a,2))/2).toFixed(1);
} 
function Calculate() {
    var maslo = parseInt(document.Sum.maslo.value);
    var masloPrice = parseInt(document.Sum.masloPrice.value);
    var sugar = parseInt(document.Sum.sugar.value);
    var sugarPrice = parseInt(document.Sum.sugarPrice.value);
    var sausage = parseInt(document.Sum.sausage.value);
    var sausagePrice = parseInt(document.Sum.sausagePrice.value);
    var sum = parseInt(document.Sum.cost.value);
    var result = sum -(maslo*masloPrice) - (sugar*sugarPrice) - (sausage * sausagePrice);
    if(result < 0)
    {
        document.Sum.ost.value = "У вас недостаточно денег";
    }
    else
    {
        document.Sum.ost.value = result;
    }

}
function Round(){
    var x = parseInt(document.Sum.number1.value);
    var y = parseInt(document.Sum.number2.value);
    document.Sum.result.value = x%y;
}

function Dictance(){
    var time = parseInt(document.Sum.number2.value);
    var speed = parseInt(document.Sum.number1.value);
    document.Sum.result.value = speed * time + " Км";
}