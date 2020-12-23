import { primeNumberList as primes } from './data.js';
let arrayResult; // Getting know prime numbers
let isPrime = (number = 2) => {
    let result = true,
        index = 0,
        rootValue; // basic inicialization
    console.log("Number is " + number); // Display result
    rootValue = Math.ceil(Math.pow(number, (1 / 2))); // getting the suare root
    console.log("Root is   " + rootValue); // Display result

    // let temp = primes.some((t)=>{
    //     return t > x;
    // });
    // console.log(temp);
    //let isIt,something;
    if (primes[primes.length - 1] > rootValue) {
        arrayResult = primes.filter((tempValue) => {
            return tempValue <= rootValue;
        });

        //console.log(arrayResult); / / This is not needed

        while (result && arrayResult.length > index) {
            (number % arrayResult[index] === 0) ? result = false: index++;
        } //this is working
        // it find out if the number is divisabel by the numbers in the list


    } else {
        //isIt=false;
        //TODO add new primes until one > rootValue
        console.log("Is:  " + Math.pow((primes[primes.length - 1]), 2));
    }

    console.log(primes[primes.length - 1]);

    //console.log(primes.length);
    return console.log("Is it prima? " + (result ? "Yes" : "No"));
}

isPrime(223); // max is 232



//console.log(primes);
