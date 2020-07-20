/*
Null and Undefined are both js primitive types which they are 
                                        1.strings 
                                        2.number
                                        3.boolean
                                        4.undefined 
                                        5.null
                                        6.symbol
                                        7.bigint , no idea what the hell is this ?

Anyways they both falsy values but each has it own situation and if we both try convert both of 
them into boolean values 
 */
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
/*
how different they are ?
-- Undefined is a default value for a var has not been assign a specific value 
                    or
-- a function that has no explicit return
                    or
-- looking for a specific property in object that does not exit
*/

let name;
let fun = () => {}
obj = {
    a:"a",
    b:"b",
    c:"c",
}
console.log(name) // undefined
console.log(fun())// undefined
console.log(obj.d) // undefined


/*
Null is a value that represents no value , it is a value that has been explicitly assigned to 
variable 


and now be aware of how we check 
*/
null == undefined // true
null === undefined // false
!null == true
isNaN(null + 1) //  false
isNaN(1 + undefined) // true
console.log(typeof null) // object
console.log(typeof undefined) // undefined