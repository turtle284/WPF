//Steve Swayngim 11/12/2013 Personal Conditionals

//define the variables
var bill = 0;
var people = 0;
var tip = 0;

//Given Enter the amount of the bill
bill = prompt('How much is your bill?');

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

//divide the bill by the amount of people

//Print results to console
