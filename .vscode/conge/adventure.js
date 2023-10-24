function leaveroom() {
  alert("you chose to leave the rooom . chicken.");
}
function enterRoom() {
  alert("you chose to enter the room and it's dark.");
  if (tool.toUpperCase() === "SHOVEL") {
    alert(
      "the shovel came in handy. you knocked out the beast by hitting him on the head with " +
        tool +
        "."
    );
  } else if (tool.toUpperCase() === "LADDER") {
    alert(
      "The ladder didn't help you much. the beast knocked you down and ate you."
    );
  } else {
    alert(
      "The" +
        tool +
        "helped you see the beast and you were able to run away in time"
    );
  }
}

function startGame() {
  var user = prompt("Welcome to my adventure game. Please enter your name:");
  alert(
    "welcome," +
      user +
      "to my campus adventure. are you ready? is so, click okay."
  );
  let tool = prompt(
    "to begin your adventure, please select a tool: SHOVEL, ladder, flashlight"
  );
  let room = prompt(
    "you walk through the campus and heAR a loud, menacing growl coming from a room around the corner. do you Enter pr do you LEAVE?"
  );

  if (room.toUpperCase() === "LEAVE") {
    leaveRoom();
  } else {
    enterRoom();
  }
}
