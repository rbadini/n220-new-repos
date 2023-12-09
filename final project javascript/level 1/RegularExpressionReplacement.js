// Function to replace 'holly' with 'jolly' in the texts
function replaceHollyWithJolly() {
    console.log("Replacing 'holly' with 'jolly'"); 

    // Regular expression to match 'holly' regardless of case
    // 'gi' means global (g) and case-insensitive (i)
    const regex = /holly/gi;

    // Get the current text from each element and replace 'holly' with 'jolly'
    // document.getElementById('text1').innerText gets the text inside the element with ID 'text1'
    // .replace(regex, 'jolly') replaces all instances of 'holly' with 'jolly' in the text
    document.getElementById('text1').innerText = document.getElementById('text1').innerText.replace(regex, 'jolly');
    document.getElementById('text2').innerText = document.getElementById('text2').innerText.replace(regex, 'jolly');
    document.getElementById('text3').innerText = document.getElementById('text3').innerText.replace(regex, 'jolly');
    document.getElementById('text4').innerText = document.getElementById('text4').innerText.replace(regex, 'jolly');
}
