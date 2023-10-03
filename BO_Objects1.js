// Create course object as specified in the Coding Challenge
const course = {
    courseNumber: "N220",
    courseTitle: "Introduction to Media Application Development",
    totalSeats: 20,
    enrolled: 18,
    availability: function() {
        return this.totalSeats > this.enrolled;
    }
};

// Print availability
console.log(`${course.courseNumber} Open: ${course.availability()}`);

// Two more students enrolled
course.enrolled += 2;
console.log(course.enrolled); // Should print 20

// Print availability again
console.log(`${course.courseNumber} Open: ${course.availability()}`);

// Window/Browser Object
document.getElementById("hwDetails").innerHTML = `Height: ${window.innerHeight}<br/>Width: ${window.innerWidth}`;

// Function to open IUPUI website
function IUPUIWebsite() {
    window.open("http://www.iupui.edu");
}

// Function to print the page
function printPage() {
    window.print();
}

// Document Object
document.getElementById("wpDetails").innerHTML = `${window.location}<br/>${document.URL}`;
document.getElementById("domain").innerHTML = `Domain: ${document.domain}`;
document.getElementById("update").innerHTML = `Last Modified: ${document.lastModified}`;

// Function to handle greeting input
function getGreeting() {
    let greeting = document.getElementById('greeting').value;
    let gMsg = `Your message is ${greeting.length} characters long.`;
    document.getElementById('messageInfo').innerHTML = gMsg;
}

// Number Object
document.getElementById("fixed").innerHTML = (10 / 3).toFixed(2);
document.getElementById("precise").innerHTML = (10 / 3).toPrecision(4);

// Math Object
document.getElementById("pi").innerHTML = Math.PI;
document.getElementById("round").innerHTML = Math.round(4.7);
document.getElementById("ceil").innerHTML = Math.ceil(4.4);
document.getElementById("floor").innerHTML = Math.floor(4.7);
document.getElementById("random").innerHTML = Math.random();

// Date Object
document.write("<h2>Date Object</h2>");
document.write(`Current Date: ${new Date().toLocaleString()}`);
