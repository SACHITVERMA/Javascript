const div1 = document.createElement("div");
div1.setAttribute("id", "myDiv");
div1.innerHTML = "Hello User";
div1.style.backgroundColor = "black";
div1.style.fontSize = "45px";
div1.style.textAlign = "center";
div1.style.color = "white";

document.body.appendChild(div1);
// The innerHTML property sets or returns the HTML content (inner HTML) of an element.

// The setAttribute() method adds the specified attribute to an element, and gives it the specified value. If the attribute already exists, the value is updated.
// The appendChild() method appends a node (element) as the last child of an element. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position (i.e., there is no need to remove the node from its parent node before appending it to some other node).

const list = document.getElementById("list");
list.style.backgroundColor = "lightblue";
list.style.padding = "10px";
list.style.color = "black";
list.style.fontSize = "45px";
//it appends a new list item to the existing list using the append() method, it append the new list item as the last child of the list element. The text content of the new list item is set to "item 4" using the textContent property.
const newItem = document.createElement("li");
newItem.textContent = "item 4";
list.append(newItem);
//premend the child element to the parent element using the prepend() method
const newItem1 = document.createElement("li");
newItem1.textContent = "item 0";
list.prepend(newItem1);

// The innerHTML property sets or returns the HTML content (inner HTML) of an element. In the above code, we are adding new list items to the existing list by using the += operator to append new HTML content to the existing innerHTML of the list element.
