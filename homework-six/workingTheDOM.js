// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Change the text content of the <h1> element to "DOM Manipulation"
    document.getElementById('title').textContent = "DOM Manipulation";

    // Change the background color of the <div> element with the id "container" to "lightblue"
    document.getElementById('container').style.backgroundColor = "lightblue";

    // Select the <ul> element and add a new <li> element with the text content "Item 7" to the list
    const ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = "Item 7";
    ul.appendChild(li);

    // The first item should have crimson text
    ul.children[0].style.color = "crimson";

    // The third item should have a pink background
    ul.children[2].style.backgroundColor = "pink";

    // The fifth item should have a yellow background
    ul.children[4].style.backgroundColor = "yellow";

    // The seventh item should have a lightGray background with royalBlue text
    ul.children[6].style.backgroundColor = "lightGray";
    ul.children[6].style.color = "royalBlue";

    // Add an 8th item with the text of your name
    li = document.createElement('li');
    li.textContent = "Your Name Here"; // Replace with your name
    ul.appendChild(li);

    // Delete the fourth item
    ul.children[3].remove();

    // Add an italic element around the button text 
    const button = document.getElementById('btn');
    button.innerHTML = `<i>${button.textContent}</i>`;

    // Make the button's background rebeccapurple with white text and a white border
    button.style.backgroundColor = "rebeccapurple";
    button.style.color = "white";
    button.style.border = "1px solid white";
});
