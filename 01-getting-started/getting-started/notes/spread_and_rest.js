// Spread ... operator

//Old array of numners
const numbers = [1,2,3];
//new array of numbers
const newNumbers = [...numbers,4];

//This will display the new array where we spread out the elements of the old array and added them into the new array and added a fourth element.
console.log(newNumbers);

//-------------------------------------------------
//Another Exapmle
//--------------------------------------------------
const person = {
  name: 'Keaton'
 
};

const newPerson = {
    //Here we take all of the properties of the person const and add them to the newPerson const so that both the name and age will be displayed.
  ...person,
  age:24
}


console.log(newPerson);

//-------------------------------------------------
// Rest operator example
//--------------------------------------------------

const filter = (...args) => {
    //Here the args are spead out and ran through the filter function element by element and are removed from the list if they do not match 1.
    return args.filter(el => el === 1);
  }
  
  console.log(filter(1,2,3));