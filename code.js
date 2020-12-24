import { primeNumberList as primes } from './data.js';
let arrayResult; // Getting know prime numbers
let isPrime = (number = 2) => {
    let result = true,
        index = 0,
        rootValue; // basic initialization
    console.log("Number is " + number); // Display result
    if((number>1)&&(number%1===0)){
        rootValue = Math.ceil(Math.pow(number, (1 / 2))); // getting the square root
        console.log("Root is   " + rootValue); // Display result
        if (primes[primes.length - 1] > rootValue) {
            arrayResult = primes.filter((tempValue) => {
                return tempValue <= rootValue;
            });
            while (number !=2 && result && arrayResult.length > index) {
                (number % arrayResult[index] === 0) ? result = false: index++;
            } //this is working; it find out if the number is devisable by the numbers in the list
        } else {
            //isIt=false;
            //TODO add new primes until one > rootValue
            console.log("Is:  " + Math.pow((primes[primes.length - 1]), 2));
        }
    }
    else{
        result = false;
    }
    return console.log("Is it prima? " + (result ? "Yes" : "No"));
}

isPrime(223); // max is 232
isPrime(-1); // max is 232
isPrime(0); // max is 232
isPrime(1); // max is 232
isPrime(3.4); // max is 232
isPrime(3);
isPrime(2);
isPrime();
