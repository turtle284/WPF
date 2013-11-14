//Steve Swayngim 11/9/13 Conditionals Worksheet

//Celsius to Fahrenheit converter

//Enter the givens
var temp = "100C";

//Separate the number from the unit of measurement
var length = temp.length;
var degree = temp.slice((length-1),length);
var unit = parseInt(temp.slice(0,(length-1)));

//Print results to the console
if (degree == 'F'){
//The calculation if it is Fahrenheit
var calc = (((unit-32)/9)*5);
console.log('The temperature is ' + calc + ' degrees Celsius.');
}
else{
//The calculation if it is Celsius
var calc = (((unit*9)/5)+32);
console.log('The temperature is ' + calc + ' degrees Fahrenheit.');
};

//Last Chance for Gas!

//Enter the givens

//Calculate the amount of gas you need


//Calculate the amount of gas you have

//Print results to console
//If gas you have enough gas

//If you don't
	
