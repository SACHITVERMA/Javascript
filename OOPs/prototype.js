//protype property is used only in cunstructor function
function user(username, rollno) {
  this.username = username;
  this.rollno = rollno;
}

user.prototype.result = function () {
  console.log("hello" + "  " + this.username);
  //it return the undefined value because we are not return any value from the function and we are calling the function using the object of the constructor function and we are using the this keyword to access the properties of the object but we are not return any value from the function so it return undefined value
};

let user1 = new user("sachit", 123);
const result = user1?.result();
console.log(result);

//  prototype chaining

// 1. Sabse bada object (Dada ji)
const dadaJi = {
  surname: "Sharma",
  zameen: "100 acres",
};

// 2. Papa ka object (Inka prototype 'dadaJi' hai)
const papa = Object.create(dadaJi);
papa.car = "Honda City";

// 3. Beta ka object (Iska prototype 'papa' hai)
const beta = Object.create(papa);
beta.bike = "KTM";

// --- Ab Prototype Chaining ka magic dekhiye ---

const parentData = Object.getPrototypeOf(beta);
console.log(beta);

console.log(beta.bike);
// Output: "KTM" (Beta ke paas khud ki bike hai, chain aage nahi badhi)

console.log(beta.car);
// Output: "Honda City" (Beta ke paas car nahi thi, usne chain mein upar Papa se le li)

console.log(beta.surname);
// Output: "Sharma" (Beta -> Papa -> DadaJi. Chain 2 step upar gayi)

console.log(beta.helicopter);
// Output: undefined (Beta -> Papa -> DadaJi -> Object.prototype -> null. Kahin nahi mila!)

// __proto__ property is used to access the prototype of an object. It is a special property that is available on all objects in JavaScript. The __proto__ property allows you to access the prototype of an object and can be used to set the prototype of an object as well.

// 1. Ek simple object banaya (Maan lijiye yeh Parent hai)

// const animal = {
//   eats: true,
//   walk: function () {
//     console.log("Animal is walking...");
//   },
// };

// // 2. Ek aur object banaya (Maan lijiye yeh Child hai)
// const dog = {
//   barks: true,
// };

// --- YAHAN MAGIC HOTA HAI ---
// Humne dog ke andar ki chupi hui taar (__proto__) ko animal se jod diya
// dog.__proto__ = animal;

// // --- AB RESULTS DEKHIYE ---

// // 1. Dog apni khud ki property access kar raha hai
// console.log(dog.barks);
// // Output: true

// // 2. Dog apne parent (animal) ki property access kar raha hai!
// console.log(dog.eats);
// // Output: true (Dog ke paas 'eats' nahi tha, usne animal se udhaar liya)

// // 3. Dog apne parent ka function (method) chala raha hai!
// dog.walk();
// // Output: Animal is walking... (Dog ke paas 'walk' method nahi tha, usne animal se udhaar liya)

// // 4. Agar hum koi aisi property access karte hain jo kahin nahi hai, toh kya hota hai?
// console.log(dog.fly);
// Output: undefined (Dog -> Animal -> Object.prototype -> null. Kahin nahi mila!)
