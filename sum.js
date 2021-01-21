//sum 1+2+#+4.....+10  or anything number
 
var m = parseInt(prompt("Enter Starting Number : "));
var n = parseInt(prompt("Enter Last Number : "));
var sum = 0;
for( var x = m; x<=n; x = x + 1)
{
   sum = sum + x;
}
 console.log(sum);
