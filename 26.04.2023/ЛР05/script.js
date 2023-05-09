function Distance(obj)
{
    for (var i = 0; i <= 10000; i += 500) 
    {
        var feet = i * 0.305;
        var yards = i * 0.914;
        obj.result.value+=`${i} метров = ${feet.toFixed(2)} футов, ${yards.toFixed(2)} ярдов`+"\n";
    }
}
function Ball(obj)
{
    var P = parseInt(obj.P.value);
    var H = parseInt(obj.H.value);
    var height = P; 
    var count = 0;
    while(height > H)
    {
        height = (2 / 3) * height; 
        count++;
    }
    obj.result2.value = `Мячик поднимется на высоту ${H} метров через ${count} ударов`;
}
function calculateFibonacci(obj) {
    var k = parseInt(obj.number.value)
    if (k < 1) {
      alert("Введите число больше нуля")
      return;
    }
    var a = 1;
    var b = 1;
    for (let i = 3; i <= k; i++) {
      const c = a + b;
      a = b;
      b = c;
    }
    obj.result.value = b;
}
function CountDigits(obj) {
    var N = parseInt(obj.number.value);
    var count = countDigits(N);
    obj.result3.value = count;
}
function countDigits(N) 
{
    var str = N.toString();
    var len = str.length;
    return len;
}
function FindEggs(obj) 
{
    while(true)
    {
        var N = 1 + k * 2 * 3 * 4 * 5 * 6;
        if (N % 7 === 0) {
            obj.result.value = N;
            break;
        }
    }
}
