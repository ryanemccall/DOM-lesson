//DOM Document Object Model
/*
A representation of a window.document object that comprises everything that we see in the browser (and things we don't such as <head> tag)
 --DOM Node interface has subclasses of:
    - Document
    - Element
    - DocumentFragment
*/

// let h1 = document.createElement("h1");
// h1.innerText = "Welcome to DOM"
// //innerText is a property that injects TEXT
// h1.style.color = "whitesmoke"//can do this but shouldn't due to separation of concerns 
// h1.style.font = "sans-serif" //this should be done in CSS for that purpose
// //references the style sheet to assign the style of your choice
// document.body.appendChild(h1);
//this appends the script to the body element in index when rendered in the browser


//document.QuerySelector()

let h3 = document.getElementById("id-method");
h3.innerText = ".getElementById"
h3.style.color = 'white';

let p = document.getElementById("get-id");
p.innerText = "Method used to grab the first element with a specified id"

//let background = document.querySelector('body');

//background.style.backgroundColor = 'red'; //will override the CSS background color if one is set

let myList = document.getElementsByClassName("our-list");
console.log(myList); //shows all of the list items with the same class as an array
myList[0].style.color = '#cc5500' //burnt orange
//the 0 is actually the UL so it will color the whole list as UL will have the index 0 in the array

let qSelect = document.querySelector("#q-select"); //have to specify that is an id with the # if it is a class you would use .
qSelect.innerText = "Query Selector grabs the first matching selector"

// .addEventListener ('event', callback_function)

let myBtn = document.querySelector(".submit-btn");
myBtn.addEventListener("click", () => {console.log ("Button has been hit!")})
