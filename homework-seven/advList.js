// Select all list items
var listItems = document.querySelectorAll("#codeBox ul li");

// Iterate over each item and append a trashcan icon
for (var i = 0; i < listItems.length; i++) {
    var trashIcon = document.createElement('img');
    trashIcon.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png'); // replace with actual path
    trashIcon.className = 'listIcon';
    listItems[i].appendChild(trashIcon);
}

// Modify existing addItem function to include icon addition
function addItem() {
    var newItemText = prompt("Enter new item:"); // Prompt user to enter the text for new item
    if (!newItemText) return; // Exit the function if no text is entered

    var newListItem = document.createElement('li'); // Create a new list item element
    newListItem.textContent = newItemText; // Set the text content of the new list item

    // Create a new image element for the trash icon
    var trashIcon = document.createElement('img');
    // Set the source attribute to the URL of the trashcan icon
    trashIcon.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');
    trashIcon.classList.add('listIcon'); // Set the class name for styling (if needed)

    newListItem.appendChild(trashIcon); // Append the trash icon to the new list item

    // Append the new list item to the list
    var list = document.querySelector("#codeBox ul");
    list.appendChild(newListItem);
}


// Add event listener to the list
var codeBoxUl = document.querySelector('#codeBox ul');
codeBoxUl.addEventListener('click', changeProp, false);

function changeProp(e) {
    var target = e.target || e.srcElement;
    var tParent = target.parentNode;

    // Check the parent of the clicked target
    if (target.tagName === 'IMG' && tParent.tagName === 'LI') {
        // Remove the list item if trash icon is clicked
        codeBoxUl.removeChild(tParent);
    } else if (tParent.tagName === 'UL') {
        // Toggle the 'selected' class to gray out the item
        target.classList.toggle('selected');
    }
}
