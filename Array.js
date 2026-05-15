// array concepts :
//array is a collection of elements all type like integer, string ,number,object etc
//in javascript array is mutable that means we can reduce or enlarge the size of array . It is dynamic ,not like c,c++

//declaration of array
let array = [1, 2, "sachit verma", "sahil", 6, ,];

//in early days array is declarying like this
let array1 = new Array(1, 2, 3, 5);
//but in this some kind of errors occure so we are using the first declaration of array

//Using Array.of method= It reduce the limitation of new Array()method
let array2 = Array.of(232.363, 78, 738);

console.log(array);

// console.log(array1);

//Array Methods---------------------------------------------------------

//length method
console.log(array.length);

// Push method= It is used to add the element in array
array.push(5);
console.log(array);

//Pop = It is used to pop out(delete) the value from the array
array.pop(5);
console.log(array);

//The join() method joins all elements of an array into a string.
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join("-"); // list is "Wind - Rain - Fire"
console.log(list);

// The shift() method removes the first element from an array and returns that element.
const first = myArray.shift();
console.log(first);
console.log(myArray);

// The unshift() method adds one or more elements to the front of an array and returns the new length of the array.

const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray becomes ["4", "5", "1", "2", "3"]

// The slice() method extracts a section of an array and returns a new array.
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// starts at index 1 and extracts all elements
// until index 3

// The splice() method removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.

// The flat() method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened

// The sort() method sorts the elements of an array in place, and returns a reference to the array

const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]

// The indexOf() method searches the array for searchElement and returns the index of the first match.
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Now try again, starting from after the last match
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, because 'z' was not found

// map() method returns a new array of the return value from executing callback on every array item.
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']

// The filter() method returns a new array containing the items for which callback returned true.
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]

//Reduce()method is besed on two value accumulator and the current value it return the single value ,
//it is not give the full array list it give only sigle value
const coins = [10, 20, 50];

// reduce() laga rahe hain
const totalAmount = coins.reduce((gullak, coin) => {
  return gullak + coin; // Naye sikke ko gullak me jod do
}, 0); // Yeh '0' bata raha hai ki shuru me gullak khali thi (Initial Value)

console.log(totalAmount); // Output: 80

//Array.from() method = It is give the arary from another thing like if we have string value ir converted into array
const word = "HELLO";

// word ek string hai, ispe map() nahi chalega.
// Array.from() isko asli array bana dega:
const lettersArray = Array.from(word);

console.log(lettersArray);
// Output: ['H', 'E', 'L', 'L', 'O']

//when we are getting the nodelist from html like  queryselector.all() then it give all the value but in object format so we can not directly apply the map,reduce and filter method so we using that method
// HTML ke saare <li> tags ko uthaya (Yeh NodeList return karega)
const listItems = document.querySelectorAll("li");

// Agar yahan listItems.map(...) likhenge toh ERROR aayega!

// Sahi Tarika: Pehle isko asli Array banao
const realArray = Array.from(listItems);

// Ab aap maze se map ya filter laga sakte ho
realArray.map((item) => {
  console.log(item.textContent);
});
