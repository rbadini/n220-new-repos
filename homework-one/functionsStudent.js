function changeTxt() {
    document.getElementById('changeTxt').innerHTML = "This text has been changed";
}

changeTxt();

function noPram() {
    document.write("This function does not take paprameters.");
}


noPram();

var greet = function(){
    console.log("hello world");
}

greet();
var favBand = "Teddy Swims";

function favoriteBand(favBand){
    document.getElementById
    ('favBand').innerHTML = favBand;
}

favoriteBand(favBand);

function mtName(first) {
    console.log(first);
}
myName('Raoul');
myName('salif');
myName("my dog is awesome");
myName(34);

var recHeight = 20;
var recWidth = 34;

function recPerm(h,w) {
    let perimeter = 2*h+2*w;
    return perimeter
    
}

document.getElementsById('panswer').innerHTML = 
recPerm(recHeight, recWidth) + " feet";

function calcArea() {
    let h = document.getElementsById('height').value;
    let w = document.getElementsById('width').value;
    var area = h*w;
    console.log(area);
    document.getElementsById('answer').innerHTML = area;
    
}

//CALLENGE: write a function that simply returns "Hello world" where "world" is a parameter. the console.log out the  text.


function greet(parameter) {
    
    return "Hello " + parameter;
}

console.log(greet("world"));  


//teacher's challenge answer

function hello (r) {
    return "hello " + r;
}

var rt = "world";
console.log(hello(rt));
console.log(hello('Rover'));

function test() {
    return true;
    return false;
}
console.log(test());


function totalRec(h,w) {
    let perm = recPerm(h,w);
    let area = h*w;
    let recInfo = [perm, area];
    return recInfo;

}

document.getElementsById('multiAnswer').
innerHTML ="perimeter: " + totalRec(recHeight, recWidth)[0] + " feet<br/>Area: " + totalRec(recHeight, recWidth)[1] + "square feet. ";
function myFunction() {
    alert("Who goes there?");
} 

function wizard(name, job) {
    document.getElementsById('future').innerHTML = "Welcome " + name + ", the " + job +"!";
}

function addItem() {
    let item = prompt("AddItem:");
    console.log(item);
    alert("you added " + item + " to your lists");

}

