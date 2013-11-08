//Steven Swayngim 11/4/2013 Personal Expressions

//Calculate your monthly expenses

//Prompt asking for electric bill
var electric = prompt('What is your monthly electric bill?');

//Prompt asking for gas bill
var gas = prompt('What is your monthly gas bill?');

//Prompt asking for Monthly Rent
var rent = prompt('What is your monthly rent?');

//Prompt asking for cable bill
var cable = prompt('What is your monthly cable bill?');

//Prompt asking asking for grocery bill
var grocery = prompt('What is your monthly grocery bill?');

//How many people reside in your household
var residents = prompt('How many residents are in your household?');

//Sum of the total expenses
var total = electric + gas + rent + cable + grocery;

//Divide the total by the number of residents to get each share
var share = total / residents;

//Print out results to console
console.log('Your hose spent a total of $' + total + '.  Your share is $' + share + '.');


