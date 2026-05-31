// call() method is used to invoke a function with a given this value and arguments provided individually.

function user(username) {
  this.username = username;
}

function display(username, age) {
  user.call(this, username);
  this.age = age;
  console.log(
    "Hello " + this.username + ", you are " + this.age + " years old.",
  );
}

let user1 = new display("Sachit", 25);
console.log(user1);

// function SetUsername(username) {
//   //complex DB calls
//   this.username = username;
//   console.log("called");
// }

// function createUser(username, email, password) {
//   SetUsername(username);

//   this.email = email;
//   this.password = password;
// }

// const chai = new createUser("chai", "chai@fb.com", "123");
// console.log(chai);
