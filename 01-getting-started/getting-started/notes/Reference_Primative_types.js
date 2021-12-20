const person = {
    name: 'Max'
};
//SecondPerson will not be a new data value, rather it will just share the pointer to the location of where person is saved.
const secondPerson = person;

console.log(secondPerson);

//
// Here is how we prove it
//

const person = {
    name: 'Max'
};

const secondPerson = person;
person.name = 'Keaton';

//You would think that this would still output 'Max' because it was stored on line 17, but actually because line 18 reasigns the name when we call secondPerson it pointer still points to the location of where person was saved, and not the old name value. 
console.log(secondPerson);

//
// To fix this issue
//

const person = {
    name: 'Max'
};
//This is how we make a real copy of the data and not just copy the pointer
const secondPerson = {
    ...person
}
person.name = 'Keaton';


console.log(secondPerson);