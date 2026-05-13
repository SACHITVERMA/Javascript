let number;
//undefined is a data type that represents the absence of a value. It is the default value of uninitialized variables.
console.log(number); //undefined

number = null;
//null is a data type that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value.
//When you assign null to a variable, it means that the variable is explicitly set to have no value. It is different from undefined, which means that the variable has not been assigned any value at all.
//it is assigning a variable to have no value, while undefined means that a variable has not been assigned any value at all.
//simple bole to ye user assign karta hai ki is variable ka koi value nahi hai, jabki undefined ka matlab hai ki variable ko abhi tak koi value assign nahi ki gayi hai.Ya fir variable ki value ko khali kar rahe hain, lekin variable ko delete nahi kar rahe hain. Iska matlab hai ki variable ab bhi exist karta hai, lekin uski value null hai.
console.log(number); //null

//if we  are assignig a number to null value
number = 10;
console.log(number); //10

//datatype conversion--------------------------------
var a = 10;
console.log(typeof a); //number

console.log(typeof String(a)); //string

let str = "Sachit verma";
var b = Number(str);
console.log(b); //NaN
console.log(typeof Number(str)); //number because NaN is of type number

let str2 = "1234";
var c = Number(str2);
console.log(c); //1234
console.log(typeof Number(str2)); //number

let Number1 = Number(undefined);
console.log(Number1); //NaN
