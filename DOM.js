document.getElementById('title').innerText = "Welcome back!";

// Query selector: target individual element/node using CSS selector
document.querySelector('p').innerText = "QuerySelector";

document.querySelector('.content').innerHTML = "Query selector using class";

// select multiple elements
// By class name
document.getElementsByClassName('odd')[0].style.color="red";

// By tag name
document.getElementsByTagName('li')[3].style.backgroundColor="rgb(200,200,100)";

// querySelectorAll
document.querySelectorAll('#myList li:not(.odd)')[0].style.fontWeight="bold";

// Challenge: Target all list items and remove the bullets and add padding
let allItems = document.getElementsByTagName('li');

for(let i=0; i<allItems.length; i++) {
    allItems[i].style.listStyle = "none";
    allItems[i].style.padding = "10px";
}

// Challenge: select alternative bands and give them a green background with white italicized text

let altBands = document.getElementsByClassName('alternative');
for(let a=0; a<altBands.length; a++) {
    altBands[a].style.backgroundColor="green";
    altBands[a].style.color="white";
    altBands[a].style.fontStyle="italic";
}

// Challenge: Make the candleBox text a link to their website
/* 1.Target the right element
   2.Create a variable with the element's text in it.
   3.Wrap a link around the text
   4.Put back into the list item
*/

let cElement = document.querySelector('.rock:last-child');
let cText = cElement.innerText;
console.log(cText);
cText = '<a href="https://www.candleboxrocks.com">' + cText + '</a>';
cElement.innerHTML = cText;


// Challenge: Add item to last list
function addItem() {
    let newItem = prompt("New Item: ");
    let newLi = document.createElement('li');
    let newLiText = document.createTextNode(newItem);
    newLi.aapendChild(newLiText); //<li>bananas</li>
    newLi.style.listStyle="none";


    //target list
    
    console.log(glist);
    gList.appendChild(newLi);
}

function deleteItem() {
    let lastItem = gList.lastElementChild
}