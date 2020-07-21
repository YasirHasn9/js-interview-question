// Recursive function 
/*
Recursion is common concept in the most of programming languages. in its simplest 
term, it is a function that called itself until it reached certain 
condition to terminate 

to make a perfect recursive function , you have to understand 2 parts of it
  1. Base case in which where do you wanna the function terminates its process
  2. Rule in which that reduces all the other cases towards the the base case
*/

function recursive_factorial(number){
    // this is the base case
    if (number === 0){
        return 1
    }
    // this is the rule in case of not reaching the base case
    return number * recursive_factorial(number - 1)
}

console.log(recursive_factorial(6))