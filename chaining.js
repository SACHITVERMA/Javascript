// concept of nullish operatora
// it return a only null and undefiend vlue if the value is not find

let user = {
  name: "sachit verma",
  course: "BCA",
};

let result = user.adress ?? "Ram";
console.log(result);

//option chaining

// operrator used : ?.
//it is used in object that helps to find the object lies inside the object and if it is not find then it return undefiend value

let user1 = {
  name: "sachit verma",
  course: "BCA",
  adress: {
    city: "Shimla",
    state: "HP",
  },
};

let result1 = user1?.rollno;
console.log(result1);
// let result1 = user1.adress?.pincode ?? "123456";
// console.log(result1);

// method chaining
// it is a technique in which we can call multiple methods on the same object in a single line of code. It is achieved by returning the object itself from each method, allowing us to chain the method calls together.

const numbers = [1, 2, 3, 4, 5];

// Method Chaining: Ek hi line mein filter aur map lagana
const evenDoubled = numbers
  .filter((num) => num % 2 === 0) // Pehle even numbers nikale: [2, 4]
  .map((num) => num * 2); // Phir unko double kar diya: [4, 8]

// console.log(evenDoubled); // Output: [4, 8]
// const evenDoubled1 = Object(...evenDoubled);
// console.log(evenDoubled1); // Output: [4, 8]
