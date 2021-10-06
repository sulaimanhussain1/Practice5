

var prime = parseInt(prompt("Enter number ? "));
var isPrime = true;

for (var i =2 ; i<prime; i++  ){
    var result = prime % i ;
    if(result == 0 ){
        document.write("Number is not prime = " + prime + " I " + i);
        isPrime = false;
        break;
    }
}
if(isPrime) {
    document.write("Number is prime " + prime);
}