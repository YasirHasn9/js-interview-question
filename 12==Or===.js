// what is the differences between == and ===
/*
the == called abstract equality and === called strict equality
the == compares 2 operators after coercion while === compares without
coercion 

but what is coercion ?
Coercion is the process of converting one type of value to another. so coercion does
implicit conversion and it has some condition to perform before comparing

lets say that we have to vars x,y and we want to test them
1. if x and y have the same value type then we use ===
1. x = null, y = undefined , return true and vice versa 
*/