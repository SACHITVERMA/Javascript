let myButton = document.getElementById("myButton");
myButton.addEventListener("click", function (e) {
  console.log(e);
  let container = document.querySelector(".container");
  if (container.style.backgroundColor === "black") {
    container.style.width = "200px";
    container.style.height = "200px";

    container.style.margin = "20px";
    container.style.borderRadius = "10px";
    container.style.transition = "background-color 0.5s ease";
    container.style.backgroundColor = "red";
  } else {
    container.style.backgroundColor = "black";
  }
});
