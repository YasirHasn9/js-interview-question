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

// console.log(recursive_factorial(6))

function fab(n){
  if(n <= 0){
    return n
  }
  return fab(n - 1) + fab(n-2)
}
// 1.   3 , 2 , 1 , 0 -- 4 ,2 , 0
console.log(fab(4))




function merge(left , right){
  let sorted_arr = []
  let left_index = 0
  let right_index = 0
  for(let i = 0 ; i < (left.length) + (right.length); i++){
    if (left_index < left.length && right_index < right.length){
      if (left[left_index] <= right[right_index]){
        left.push(left[left_index])
        left_index += 1
      } else {
        right.push(right[right_index])
        right_index += 1
      }
    }
    else if (left_index === left.length){
      sorted_arr.push(right[right_index])
      right_index += 1
    } else if (right_index === right.length){
      sorted_arr.push(left[left_index])
      left_index += 1
    }

  }
  return sorted_arr
}