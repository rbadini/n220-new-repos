function calculatePrice() {
    // Retrieve the entered price and convert it to a floating-point number
    const price = parseFloat(document.getElementById('price').value);
  
    // Get the discount code entered by the user, converted to uppercase
    const discountCode = document.getElementById('discountCode').value.toUpperCase();
  
    // An object mapping discount codes to their respective discount percentages
    const discountRates = {
      'SAVE20': 0.20, // 20% discount
      'JOLLYDAYS': 0.15, // 15% discount
      'HOLIDAY10': 0.10 // 10% discount
    };
  
    // Determine the discount rate based on the entered code
    // If the code is not in the object, default to 0 (no discount)
    const discount = discountRates[discountCode] || 0;
  
    // Calculate the amount of discount by multiplying the price by the discount rate
    const discountAmount = parseFloat(price * discount).toFixed(2);
  
    // Calculate the price after applying the discount
    const priceAfterDiscount = parseFloat(price - discountAmount).toFixed(2);
  
    // Define a constant for the tax rate (8%)
    const TAX_RATE = 0.08;
  
    // Calculate the tax on the price after discount
    const tax = parseFloat(priceAfterDiscount * TAX_RATE).toFixed(2);
  
    // Calculate the final price by adding the tax to the price after discount
    const finalPrice = parseFloat(parseFloat(priceAfterDiscount) + parseFloat(tax)).toFixed(2);
  
    // Calculate the total amount saved, which is the original price minus the final price
    const totalSaved = parseFloat(price - finalPrice).toFixed(2);
  
    // Display the final price and the amount saved in the webpage
    document.getElementById('result').innerHTML = `Result: Your Total: $${finalPrice}<br>You saved $${totalSaved}!`;
  }
  