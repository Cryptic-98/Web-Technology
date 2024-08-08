for(i = 1; i <= 15; i++) {
    if (i % 2 == 0)
    document.write(i + ' - Even' + '<br>')
    else
    document.write(i + ' - Odd' + '<br>')
}
document.write('<br><br>Syntax fixes: <br>')
document.write('// var 3 = 3 <br> var three = 3 <br> var four = 4 <br> // sum = 3 + four <br> sum = three + four <br><br>')
// var 3 = 3;
var three = 3;
var four = 4;
// sum = 3 + four;
sum = three + four;
document.write('Sum = ' + sum);