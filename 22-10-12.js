// Given a number as an input, print out every integer from 1 to that number. However, when the integer is 
// divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by 
// both 3 and 5, print out “Fizz Buzz”.

//PREP is parameters, returns, examples, pseudocode

//parameters: you will get a number as input
//returns: you give back fizz, buzz, fizzbuzz, or the number
//examples: 15 is fizzbuzz, 6 is fizz, 17 is a number, 25 is buzz

//create a function
function fizzBuzz(number) {
    //run through every number under 100
    for (number=1; number<100; number++) {
        //if you divide it by both 5 and 3 and the answer is zero it's fizzbuzz
        if (number%5 === 0 && number%3 === 0){
            console.log("Fizz Buzz")
        //if modulus 5 is 0 it's buzz
        } else if (number%5 === 0) {
            console.log("Buzz")
        //if modulus 3 is 0 it's fizz
        } else if (number%3 === 0){
            console.log("Fizz")
        } else {
        //otherwise just give back the number
            console.log(number)
        }
    }
}

