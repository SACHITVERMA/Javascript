//stack and heap is that type of concept which is used to manage memory in programming languages.

//stack= stack is a data structure that follows the Last In First Out (LIFO) principle. It is used to store and manage function calls, local variables, and control flow in programming languages. When a function is called, a new stack frame is created on the stack to hold the function's local variables and return address. When the function returns, the stack frame is removed from the stack.

//  heap= heap is a region of memory that is used for dynamic memory allocation. It is used to store objects and data that are created at runtime. When an object is created, it is allocated on the heap, and a reference to that object is stored in a variable. The heap allows for flexible memory management, as objects can be created and destroyed dynamically during the execution of a program.

//basically stack is used for primitive type data type in which we are passing the copy value ,it is not pointing the reffrence value

//stack(primitive data type) and heap (non primitive data type) dono me difference ye hai ki stack me primitive data type store hota hai aur heap me non primitive data type store hota hai. Stack me jab hum variable ko assign karte hain to usme copy value pass hoti hai, jabki heap me jab hum variable ko assign karte hain to usme reference value pass hoti hai. Iska matlab hai ki stack me jab hum variable ko assign karte hain to usme copy value pass hoti hai, jabki heap me jab hum variable ko assign karte hain to usme reference value pass hoti hai.

// for example:------------------

let a = 10;
let b = a;
console.log(a); //10
console.log(b); //10
//if we are assigning the value of b variable then it not refelected in a variable because it is passing the copy value not reference value
b = 20;
console.log(a); //10
console.log(b); //20

//Heap --------------------------------------------
//in heap it pointing to that value which is stored in heap memory and it is not passing the copy value it is passing the reference value
// for example:------------------

let name = {
  first: "Ram",
  last: "Kumar",
};

let anothername = name;
console.log(name.first + " " + name.last); //Ram Kumar
console.log(anothername.first + " " + anothername.last); //Ram Kumar

//but if we are changing the value of anothername variable then it is reflected in name variable because it is passing the reference value not copy value
anothername.first = "Shyam";
console.log(name.first + " " + name.last); //Shyam Kumar
console.log(anothername.first + " " + anothername.last); //Shyam Kumar


//--------------------------------------

