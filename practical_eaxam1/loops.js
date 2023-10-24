//For loop 
for(let i=0;i<5;i++){
    document.getElementById('for').innerHTML+=i+" ";
}

//While loop 
let weeks = 5; 
while(weeks>1) { 

    document.getElementById('while').innerHTML+="There are"+ weeks + " weeks until Thanksgiving Break. <br/>";
    weeks--;



// do while loop
let candy = 3;
do{
    document.getElementById('dowhile').innerHTML+=" have " + candy + " pieces of candy.</br>";
    candy--;

} while(candy>0);

// loop problems
// problem 1
let months = ["January", "February", "March", "April", "May", "June"];

let monthList;
for(let m=0; m<months.length;m++) {
    monthList+= months[m] + " ";
}
document.getElementById('an1').innerHTML = monthList;

// problem 2

let monthList2='<ol>';
for(let m2=0; m2<months.length;m++) {
    monthList2+= "<li>"months[m2] + "</li>";
}
document.getElementById('an2').innerHTML = monthList2;

let monthList2="</ol>";
document.getElementById('an2').innerHTML = 

//Problem 3
let slices = 9;
while(slices>=2) {
    document.getElementById('an3').innerHTML+="There are " + slices + "slices of pizza left.<br/>
    slices--;
}

let num = 25;
do {
    document.getElementById('an4').innerHTML+="number count: " + num +"<br/>";
    num++;
} while(num<20);
// prblem
let today = new Date();
let tDate = today.getDate();//10
for(let d=50; d>=5; d-=5) {//d=d-5; d-=5
document.getElementById('an5').innerHTML+=d+"";
if(d==tadte) {
    document.getElementById('an5').innerHTML+="<br/>That's today's date.<br/>";
    break;
}
}

//Problem 7
let tickets = 10;
let ticketsText='';
while(tickets>0) {
    tickets--;
    if(tickets==0) {
        ticketsText+="All tickets are benn sold.";
        break;
    }
    ticketsText+="Another seat is gone. Only " + tickets + "tickets left.<br/>";
    if(tickets==5) {
        ticketsText+="Half of the tickets are sold. Buy yours now.<br/>";
    }
    document.getElementById('an7').innerHTML = ticketsText;

    // for in
    
    const Course = {
        "cNum":"N220",
        "title": "Intro to Javascript",
        "enrolled":20,
        "prereq": false,
        "offerering": ['Fall', 'Spring']
    }
    for(p in course) {
        document.getElementById('forIn').innerHTML+= + " + " + course[p];
    }

}

for(month in months) {
    console.log(month + ": " + months[month]);
}

let holyday = "halloween";
for(h in holyday) {
    console.log(h + " : " + holyday[h]);
}
// For of
// }
// for(p in course) {
//     document.getElementById('forof').innerHTML+= + " + " + course[p];
// }

}

for(month in months) {
console.log(month);
}

let holyday = "halloween";
for(h in holyday) {
console.log(h);
}
