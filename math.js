let a = Math.PI;
console.log(a);

console.log(Math.fround(a)); //for round off the value
console.log(Math.trunc(a)); //to truncate the value
// let b = 125.65;
// console.log(Math.floor(b)); //it is working for the negative value bestly

// console.log(Math.ceil(b)); //it is workking for the positive value bestly

let b = -125.65;
console.log(Math.floor(b)); //it is working for the negative value bestly

console.log(Math.ceil(b)); //it is workking for the positive value bestly

//+++++++++++++
//random method
let x = Math.round(Math.random());
console.log(`random bumber is ${x}`);

//--------------------------------------

//How Javascript allow to write the binary ,octal and hexadecimal number in the code
//and how it convert that value

let number = 0x1f;
console.log(number); //it give the hexadecimal value in decimal form

let number2 = 0b1010;
console.log(number2); //it give the binary value in decimal form

let number3 = 0o3647;
console.log(number3); //it give the octal value in decimal form

//Parsing the value in javascript-------------------------

let number = 3547463;
console.log(Number.parseFloat(number)); //it is parsing the value in floating form

let number2 = 6747.89;
console.log(Number.parseInt(number2));
console.log(Number.isInteger(number2));
