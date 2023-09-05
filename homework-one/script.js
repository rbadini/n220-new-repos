window.onload = function() {
    // Dating section calculations
    const ticketPrice = 14;
    const friends = 2;
    const totalCost = ticketPrice * (friends + 1); // Adding 1 for Larry

    document.getElementById("ticketNum").innerText += ` ${friends + 1}`;
    document.getElementById("ticketCost").innerText += `${ticketPrice.toFixed(2)}`;
    document.getElementById("ttCost").innerText += `${totalCost.toFixed(2)}`;

    // Shopping section calculations
    const bankAccount = 235.87;
    const shirt = 35;
    const pants = 75;
    const shoes = 60;
    const outfitCost = shirt + pants + shoes;
    const remainingBalance = bankAccount - outfitCost;

    const jacket = 70;
    const canBuyJacket = remainingBalance >= jacket;

    document.getElementById("bank").innerText = `Remaining Balance: $${remainingBalance.toFixed(2)}`;
    document.getElementById("addJacket").innerText = `Can add Jacket: ${canBuyJacket}`;

    // Pizza section calculations
    const pizzas = 4;
    const slicesPerPizza = 8;
    const estimatedSlicesPerStudent = 2.5;
    const totalSlices = pizzas * slicesPerPizza;
    const studentsFed = Math.floor(totalSlices / estimatedSlicesPerStudent);
    const leftoverSlices = totalSlices % estimatedSlicesPerStudent;

    document.getElementById('profPizza').innerText = `Students Fed: ${studentsFed}, Leftover Slices: ${leftoverSlices}`;

    // Monty's section calculations
    const adultBuffet = 12;
    const childBuffet = 6;
    const drink = 1.5;
    const mealCost = (2 * adultBuffet) + childBuffet + (3 * drink);

    document.getElementById("Monty").innerText = `Total Meal Cost: $${mealCost.toFixed(2)}`;

    // Tips section calculations
    const week1 = 202.45;
    const week2 = 134.97;
    const week3 = 256.63;
    const week4 = 178.22;
    const totalTips = week1 + week2 + week3 + week4;
    const averageTips = totalTips / 4;

    document.getElementById("tips").innerText = `Average Weekly Tips: $${averageTips.toFixed(2)}`;
};
