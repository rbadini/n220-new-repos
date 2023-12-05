//HTML Event Handler

const oldSchool = () => {
  //Print comment under HTML Event Handler bullet point
  document.getElementById("htmlEH").innerText = "This is bad practice. Don't use this one. ";
};

//Traditional DOM Handler
const tradText = () => {
  document.getElementById("traditional").innerText = "You can only attach one function to this event handler.";
};

document.getElementsByTagName("input")[1].onclick = tradText;


//Level 2 Event Listener
const alertMe = () => alert("Use This!");

const level2Text = () => {
  //text under level 2 bullet
  document.getElementById("level2").innerText = "You can attach one or more functions to this event handler.";
};

const level2Button = document.getElementsByTagName("input")[2];

level2Button.addEventListener("click", () => {
  alertMe();
  level2Text();
}, false);

//UI Event
window.addEventListener("load", () => {
  const pageURL = document.URL;
  const lastModified = document.lastModified;
  //display url and update date
  document.getElementById("pageURL").innerText = `Page URL: ${pageURL}`;
  document.getElementById("myLastUpdate").innerText = `Last Update: ${lastModified}`;
});

//Keyboard Event
const myText = document.getElementsByTagName("input")[3];
let keyCount = 0;

keyPressCounter.addEventListener("keydown", () => {
  keyCount++;
  document.getElementById("pressNumber").innerText = `Keys pressed: ${keyCount}`;
});


//Mouse Event

const mouseText = document.getElementById("mouseText");

mouseText.addEventListener("dblclick", () => {
  mouseText.innerText = "You have changed the text.";
});


//Focus Event
const focusText = document.getElementById("focusText");

focusText.addEventListener("blur", () => {
  focusText.value = focusText.value.toUpperCase();
});

//Form Events
// Select elements using const
const dropD = document.getElementById("js");
const ddText = document.getElementById("selectText");

// Use arrow function for event handler
const selectedChoice = () => {
  const yourChoice = dropD.value; 
  let printChoice;

  switch (yourChoice) {
    case "javascript":
      printChoice = "Javascript is the base for all of these.";
      break;
    case "jQuery":
      printChoice = "You will learn jQuery in another web course.";
      break;
    case 'Angular':
      printChoice = "Angular is a very popular Javascript framework.";
      break;
    case 'React':
      printChoice = "You will learn React in advanced web courses.";
      break;
    default:
      printChoice = "Please make a selection.";
      break;    
  }

  // Using template literals for string concatenation
  ddText.innerText = printChoice;
};

// Add event listener with arrow function
dropD.addEventListener('change', selectedChoice);
//Add/Detete List

const addBtn = document.getElementsByTagName('button')[0];
const itemList = document.getElementById('myList');

const addItem = () => {
  const newItem = prompt("Add Item:");
  const newLi = document.createElement('li');
  newLi.appendChild(document.createTextNode(newItem));
  itemList.appendChild(newLi);
};

addBtn.addEventListener('click', addItem);

//Target of event
const getTarget = (e) => e.target || e.srcElement;

//Remove target from list
const removeItem = (e) => {
  const target = getTarget(e);
  target.parentNode.removeChild(target);
};

itemList.addEventListener('click', removeItem);