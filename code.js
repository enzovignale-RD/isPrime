import {primeNumberList as primes} from './data.js';
let arrayResult;
let isPrime = (number=2)=>{
    let result = true,index=0,rootValue;
    console.log("Number is " + number);
    rootValue = Math.ceil(Math.pow(number,(1/2)));
    console.log("Root is   " + rootValue);

    // let temp = primes.some((t)=>{
    //     return t > x;
    // });
    // console.log(temp);
    //let isIt,something;
    if(primes[primes.length-1] > rootValue){
        arrayResult = primes.filter((tempValue)=>{
            return tempValue <= rootValue;
        });

        console.log(arrayResult);

        while(result && arrayResult.length > index){
            (number % arrayResult[index] === 0)?result=false:index++;
        }


    }else{
        //isIt=false;
        //TODO add new primes until one > rootValue
        console.log("Is:  "+Math.pow((primes[primes.length-1]), 2));
    }

    console.log(primes[primes.length-1]);

    //console.log(primes.length);
    return console.log(result);
}

isPrime(232);



//console.log(primes);