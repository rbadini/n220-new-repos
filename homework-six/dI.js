document.getElementById('dice_1').innerHTML = '<img src="images/' + dieImage+ '">';

//seasons of the year
// let myMonth = today.getMonth() + 1;
let seasonText = document.getElementById('season');
switch(true) {
    case (myMonth==12 || myMonth<=2):
        seasonText.innerHTML = "It's Winter!";
        break;
        case (myMonth==3 || myMonth<=5):
        seasonText.innerHTML = "It's Spring!";
        break;
        case (myMonth==6 || myMonth<=8):
        seasonText.innerHTML = "It's Summer!";
        break;
        case (myMonth==9 || myMonth<=11):
        seasonText.innerHTML = "It's Fall!";
        break;
        default:
            


}