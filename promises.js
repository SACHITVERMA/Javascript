// ("https://api.github.com/users/Sachitverma");
//

// Promises in JavaScript

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Creating a Promise

// it calling the promise chaining, then and catch are used to handle the resolved and rejected states of the promise respectively.
// const mypromise = new Promise((resolve, reject) => {
//   let data = fetch("https://api.github.com/users/Sachitverma");
//   //   let data = true; // Simulating a failed fetch operation
//   if (!data) {
//     reject("Error fetching data");
//   } else {
//     resolve(data); // Promise is fulfilled
//   }
// })
//   .then((userdata) => {
//     return userdata.json(); // JSON mein convert karna zaroori hai
//   })
//   .then((jsondata) => {
//     console.log(jsondata.name); // Ab yahan aapka actual GitHub profile data print hoga
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 2nd way to fetch data using promises without creating a new promise, directly using fetch which returns a promise

// fetch("https://api.github.com/users/Sachitverma")
//   .then((response) => {
//     // fetch se directly data nahi milta, pehle ek 'response' object milta hai.
//     // Us response ko JSON mein convert karna zaroori hai.
//     return response.json();
//   })
//   .then((userdata) => {
//     console.log(userdata.name); // Ab yahan aapka actual GitHub profile data print hoga
//   })
//   .catch((error) => {
//     console.log("Error fetching data:", error);
//   });

// In the above code, we create a new Promise that fetches data from a URL. If the fetch is successful, we resolve the Promise with the user data. If there is an error, we reject the Promise with the error message.

// 3rd way to declare a promises

const mypromise = new Promise((resolve, reject) => {
  let data = fetch("https://api.github.com/users/Sachitverma");
  let data2 = data.json(); // Simulating a failed fetch operation
  //   let data = true; // Simulating a failed fetch operation
  if (!data) {
    reject("Error fetching data");
  } else {
    resolve(data2); // Promise is fulfilled
  }
});

mypromise
  .then((userdata) => {
    // console.log(userdata); // Yahan aapko fetch se milne wala response object milega
    // return userdata.json(); // JSON mein convert karna zaroori hai
    console.log(userdata); // Yahan aapko fetch se milne wala response object milega
  })
  //   .then((jsondata) => {
  //     // console.log(jsondata);

  //     console.log(jsondata.name); // Ab yahan aapka actual GitHub profile data print hoga
  //   })
  .catch((error) => {
    console.log(error);
  });
