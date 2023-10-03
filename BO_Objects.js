// Create course object
const course = {
    courseNumber: "N220",
    courseTitle: "Introduction to Media Application Development",
    totalSeats: 20,
    enrolled: 18,
    availability: function() {
        return this.totalSeats > this.enrolled;
    }
};

console.log(`${course.courseNumber} Open: ${course.availability()}`);

// Two more students enrolled
course.enrolled += 2;

console.log(course.enrolled);
console.log(`${course.courseNumber} Open: ${course.availability()}`);

let pageDetails = `Height: ${window.innerHeight}<br/>Width: ${window.innerWidth}`;
document.getElementById("hwDetails").innerHTML = pageDetails;

function IUPUIWebsite() {
    open("http://www.iupui.edu");
}

function printPage() {
    print();
}

document.getElementById("wpDetails").innerHTML = `${window.location}<br/>${document.URL}`;
document.getElementById("Domain").innerHTML = `Domain: ${document.domain}`;
document.getElementById('update').innerHTML = `Last Modified: ${document.lastModified}`;

function getGreeting() {
    let greeting = document.getElementById('greeting').value;
    let gMsg = `Your message is ${greeting.length} long.`;
    let middleC = Math.floor(greeting.length / 2);
    gMsg += `The middle character is ${greeting.charAt(middleC)}`;
    document.getElementById('messageInfo').innerHTML = gMsg;
}

let newText = "I hope this works";
newText = newText.toUpperCase();
newText = newText.replace("HOPE", "THINK");
document.getElementById('coolText').innerHTML = newText;


let classList = document.getElementById('classes').innerHTML;
console.log(classList);

let classListArray = classList.split(", ");
console.log(classListArray);

document.getElementById('class').innerHTML = classListArray[2];


var newNumber = 6.75675464;
document.getElementById('fixed').innerHTML = newNumber.toFixed(1);

document.getElementById('precise').innerHTML = newNumber.toPrecise(5);

var myPi = Math.PI;
console.log(myPi);
document.getElementById('ceil').innerHTML = Math.ceil(myPi);
document.getElementById('floor').innerHTML = Math.floor(myPi);

var rNum =Math.random()*10;
document.getElementById('random').innerHTML = Math.ceil(rNum)+1;



//Date Object
const today = new Date();
document.write("today:" + today);
document.write("<br>Day:" + today.getDay());
document.write("<br>Date:" + today.getDate());
document.write("<br>Month:" + today.getMonth());
document.write("<br>Year:" + today.getFullYear());
document.write("<br>Today's Date:" + today.toDateString());
document.write("<br>Today's time:" + today.toTimeString());