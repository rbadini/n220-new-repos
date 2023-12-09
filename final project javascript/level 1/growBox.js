// Function to calculate the area and display the box
function calculateArea() {
    const widthInFeet = document.getElementById('width').value;
    const heightInFeet = document.getElementById('height').value;

    // Calculate area
    const area = widthInFeet * heightInFeet;

    // Update the result text
    document.getElementById('result').innerText = `${area} square feet`;

    // Display the box
    const growBox = document.getElementById('growBox');
    growBox.style.width = `${widthInFeet * 10}px`; // 1 foot = 10 pixels
    growBox.style.height = `${heightInFeet * 10}px`;
}
