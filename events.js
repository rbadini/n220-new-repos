// text under level 2 bullet
document.getElementById('level2').innerText = "You can attach one or more functions to this event handler.";

let level2Button = document.getElementsByTagName('input')[2];

function alertMe() {
  alert("Button clicked!");
}

function level2Text() {
  // text under level 2 bullet
  document.getElementById('level2').innerText = "You can attach one or more functions to this event handler.";
}

level2Button.addEventListener('click', function() {
  alertMe();
  level2Text();
}, false);

// UI Event
let pageURL = document.URL;
let lastModified = document.lastModified;

function displayInfo() {
  // display URL and update date
  document.getElementById('pageURL').innerText = "Page URL: " + pageURL;
  document.getElementById('myLastUpdate').innerText = "Last Update: " + lastModified;
}

window.addEventListener('load', displayInfo);

// Keyboard Event
let myText = document.getElementsByTagName('input')[3];
let keyCount = 0;

function countKeys() {
  keyCount++;
  document.getElementById('pressNumber').innerText = "You have pressed a key " + keyCount + " times.";
}

myText.addEventListener('keydown', countKeys);

// Mouse Event
let mouseText = document.getElementById('danger');

function changeText() {
  // change paragraph text
  mouseText.innerHTML = "<b>You have changed the text.</b>";
}

mouseText.addEventListener('dblclick', changeText);

// Focus Event
let focusText = document.getElementsByClassName('blurText')[0];

function changeToUpper() {
  focusText.value = focusText.value.toUpperCase();
}

focusText.addEventListener('blur', changeToUpper);

// Form Events
let dropD = document.getElementById('js');
let ddText = document.getElementById('selectText');

function selectedChoice() {
  let yourChoice = dropD.options[dropD.selectedIndex].value;
  let printChoice;

  switch (yourChoice) {
    case "javascript":
      printChoice = "JavaScript is the base for all of these.";
      break;
    case "jQuery":
      printChoice = "You will learn jQuery in another web course.";
      break;
    case "Angular":
      printChoice = "Angular is a very popular JavaScript framework.";
      break;
    case "React":
      printChoice = "You will learn React in advanced web courses.";
      break;
    default:
      printChoice = "Please make a selection.";
      break;
  }

  ddText.innerText = printChoice;
}

dropD.addEventListener('change', selectedChoice);

//Add/Delete List

let addBtn = document.getElementsByTagName('button')[0];
let itemList = document.getElementById('myList');

function addItem() {
    let newItem = ("Add addItem;");
    let newLi = document.createElement('li');
    let newLiText = document.createTextNode(newItem);
    newLi.appendChild(newLiText);
    itemList.appendChild(newLi);

    addBtn.addEventListener('click', addItem);

    //Target of event
    function getTarget(e) {
        if(!e) {
            e=window.event;
        }
        return e.target || e.srcElement;

        //Remove target from list
        function removeItem(e) {
            let target = getTarget(e);
            let tParent = target.parentNode;
            tParent.removeChild(target);


        }
    }
}