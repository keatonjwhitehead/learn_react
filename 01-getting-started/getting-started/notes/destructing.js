//Destructing 
////Easily extract array elements or object properties and store them into variables
////This is different than the spread or rest operator because instead of pulling out all of the elements, you will be able to pull out single elements for array and objects

// Array Destructuring
// -------------------
// [a,b] = ['Hello','Keaton]
// console.log(a) -> Hello
// console.log(b) -> Keaton

/* For arrays order defines which property we take*/

// Object Destructuring
// -------------------
// {name} = {name: 'Keaton', age:28}
// console.log(name) -> Keaton
// console.log(age) -> undefined

/* We are just targeting {name} here so console.logging age results in undefined */

/* For objects the property name defines which property we take*/

const numbers = [1,2,3];
[num1,num2] = numbers;
console.log(num1,num2);

//Here we need to add a space for the second array element.
[num1, , num3] = numbers;
console.log(num1,num3);

//This is how you extract specifice array elements 