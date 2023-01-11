// const firstNmae = "Anttoinette"
// const lastNmae = "Henry"

const person = {
     firstName: "Anttonette",
     lastName: "Henry",
     age: 25
}

// dot notation
person.firstName

// bracket notation
person["lastName"]



person.firstName = "Anttoinette";

// Adding new property to an object
person.height = 178;

//delete a prpoerty
delete person.height;

console.log("hello " + person.firstName + " " + person.lastName);
console.log("age:", person.age);
console.log ("person object:", person);