//Steve Swayngim 11/12/2013 Personal Conditionals

//define the variables
var bill = 0;
var people = 0;
var tip = 0;

//Given Enter the amount of the bill
bill = prompt('How much is your bill?');

//Validate that a value was entered
if ( bill == '' || bill == null || bill == undefined){
	alert('Please enter an amount');
};

//Given Enter the amount of people in your party
var people = prompt('How many people are in your party?');

//Create a conditional to see if the party is greater than 6
if (people >= 6){
//If the party is greater than 6 tip is automatically 18 percent
	tip = 18;
}
else{
//If the party is less than 6 prompt asking for the tip amount
	tip = prompt('What percentage do you want to tip?')
};

//Sum the bill and tip
var total = parseInt(bill) + parseInt(bill*(tip/100));

//Divide it by the amount of people
var share = total / people;

//Print results to console
console.log('Your total bill with gratuity was $' + total + '.  Your share is $' + share + '.');