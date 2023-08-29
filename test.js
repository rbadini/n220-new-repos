var fName="Raoul";   //string
var book="Raoul's dogs";
var lName ="Badini";
var myAge = 27;  //integer/number
var student = true; //boolean
var fullName =fName + " " + lName;

student = false;

let homeTown = "Indianapolis";
homeTown = "Chicago";

const DIMVAL = 10;
console.log(DIMVAL);
// DIMVAL=30;
//console.log(DIMVAL);

console.log("N220");
console.log(book);

document.write(fName);
document.write(student);
document.write(homeTown);

//FIND DATA TYPE OF ARIABLE
console.log("student:" + typeof student);
console.log("myAge: " + typeof myAge);

//"Raoul Badini is 27 years old."
document.getElementById("fullName").
innerHTML=fullName + " is " + myAge +" years old.";

//lunch problem
var banana = 1.25;
var sandwitch = 4.5;
var chips = 1.5;
var drink =2 ;
var lunch = banana + sandwitch + drink +chips*2;
console.log("lunch cost: " + lunch);
var cashOnHand = 12;
const TAXRATE = 0.07;
var lunchTotal = lunch + (lunch*TAXRATE);

document.getElementById('lunch').innerHTML+=" " + cashOnHand>lunchTotal;