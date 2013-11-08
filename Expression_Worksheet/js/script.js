// Steven Swayngim 11/1/2013 Expressions Worksheet

//Dog Years
//Calculate the age of a dog in dog years
//Sparky's Age in human years
var humanYears = 6;

//Multiply Sparky's age in Human Years by 7 to determine his age in dog years 
var dogYears = humanYears * 7;

//Print results to the console
console.log ('Sparky is ' + humanYears + ' human years old which is ' + dogYears + ' in dog years.');

//Slice of Pie part 1
//Calculate the number of slices per person
//Number of slices per pizza
var slicesPerPizza = 8;

//Number of people at the party
var people = 12;

//Number of pizzas ordered
var pizzas = 5;

//Determine the total amount of slices
var totalSlices = pizzas * slicesPerPizza;

//Divide the total slices evenly among the guests
var slicesPerPerson = totalSlices / people;

//Print results to the console
console.log('Each person ate ' + slicesPerPerson + ' slices of pizza at the party.');

//Slice of Pie part II
//Calculate the number of whole slices for each guest.
//Determine the amount of whole slices by rounding the slices per person down to the closest whole integer
var wholeSlices = Math.floor(slicesPerPerson);

//Determine the amount sparky gets to eat by calculating the difference between total slices and the slices the guests eat
var sparkySlices = totalSlices - (people * wholeSlices);

//Print results to the console
console.log('Sparky got ' + sparkySlices + ' slices of pizza.');

//Average shopping bill
//Calculate the total grocery bill and the average
//The past 5 grocery bills
var groceries = [35.89, 50.54, 42.23, 79.85, 100.09];
var groceryTotal = 0;

//Loop through the array and sum the grocery bills
for (i=0; i<groceries.length; i++){
	 groceryTotal = groceryTotal + (groceries[i]);
};

//Calculate the average
var groceryAverage = groceryTotal / groceries.length;

//Print results to the console
console.log('You have spent a total of $'+groceryTotal+' on groceries over ' + groceries.length + ' weeks. That is an average of $' + groceryAverage + ' per week');

//Discounts
//Calculate the discounted price for an item.
//Original price of the item
var originalPrice = 10;

//Discount percentage
var discountRate = 20;

//Calculate the Amount of a discount
var discountAmount = originalPrice * (discountRate/100);

//Calculate the new price
var discountPrice = originalPrice - discountAmount;

//Description of item
var itemDesc = "Pants";

//Sales tax percentage
var salesTaxRate = 8;

//Calculate the amount of sales tax
var salesTax = discountPrice * (salesTaxRate/100);

//Calculate the price of the item with sales tax
var finalPrice = discountPrice + salesTax;

//Print results to the console
console.log('Your ' + itemDesc + ' was originally $' + originalPrice + ', but after a ' + discountRate + '% discount, it is now $' + discountPrice + ' without tax, and $' + finalPrice + ' with tax.');