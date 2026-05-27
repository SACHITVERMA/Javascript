// constructor is a special method that is used to initialize objects created from a class. It is called automatically when an object is created and can be used to set initial values for the object's properties.

// construct function is used to create a object and initialize it with some values. It is a special function that is called when an object is created from a class. The constructor function can take parameters that are used to initialize the object's properties.

// Example of a constructor function in JavaScript:

function person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  return this; // Return the current object instance
  //   console.log(this);
  //
}

// Creating an object using the constructor function
const person1 = new person("Sachit", 21, "male");
const person2 = new person("Alice", 25, "female");

console.log(person1);
console.log(person2);
