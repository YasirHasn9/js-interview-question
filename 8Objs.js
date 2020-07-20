let obj = {

}
console.log(obj.someProp.x)

// this throw an error because we are obviously trying to access 
// property someProp that is not defined and 
// and when the property does not exist in object and itself or its prototype
// return undefined and undefined has no property
