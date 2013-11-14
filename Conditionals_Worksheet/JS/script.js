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
var mpg = 32;
var tankSize = 20;
var guage = 5;
var distance = 200;

//Calculate the amount of gas you need
var need = distance/mpg;

//Calculate the amount of gas you have
var have = tankSize*guage/100;

//Print results to console
//If gas you have enough gas
if (have>=need){
	console.log('Yes, you can make it without stopping for gas!');
}
else{
//If you don't
	console.log('You only have ' + have +' gallons of gas in your tank, better get gas now while you can!');
};

//Grade Letter Calculator

//Enter the givens
var percent = 79;

//Print results to the console
//Determine the equivalent letter grade
if (percent >= 95){
	console.log('You have a ' + percent + '%, which means you have earned an A+ in the class!');
}
else if(percent < 95 && percent >=90){
	console.log('You have a ' + percent + '%, which means you have earned an A in the class!');
}
else if(percent < 90 && percent >=85){
	console.log('You have a ' + percent + '%, which means you have earned a B+ in the class!');
}
else if(percent < 85 && percent >=80){
	console.log('You have a ' + percent + '%, which means you have earned a B in the class!');
}
else if(percent < 80 && percent >=76){
	console.log('You have a ' + percent + '%, which means you have earned a C+ in the class!');
}
else if(percent < 76 && percent >=73){
	console.log('You have a ' + percent + '%, which means you have earned a C in the class!');
}
else if(percent < 73 && percent >=70){
	console.log('You have a ' + percent + '%, which means you have earned a D in the class!');
}
else {
	console.log('You have a ' + percent + '%, which means you have earned a F in the class!');
};

//Check the Login

//Enter Givens
var userLogin = "Steve75";
var userPassword = "n0saces";

//Enter the correct username and password.  Password is case sensitive
var correctLogin = "Steve75";
var correctPassword = "n0spaces";

//Print results to the console
//Check the username
if (userLogin == correctLogin){
//Check the password
	if (userPassword == correctPassword){
		console.log('Welcome, ' + userLogin + '!');
	}
	else {
		console.log('Password does not match our records.');
	}
}
else {
	console.log('User not found. Try again.');
};

//Tire Pressure I

//Enter the Givens (Array is setup front left, front right, back left, back right)
var pressure = [ 20, 21, 22, 22];

//Print results to console
//Compare the front two tires and the back two tires
if (pressure[0]==pressure[1] && pressure[2]==pressure[3]){
	console.log('The tires pass spec!');
}
else {
	console.log('Get your tires checked out!')
};

//Movie Ticket Price

//Enter the Givens
var age = 40;
var movieTime =15;

//Print results to the consoe
//Compare the age
if (age >= 55 || age < 10){
	console.log('The ticket price is $7.00');
}
else{
//Compare the time
	if (movieTime > 14 && movieTime < 17){
		console.log('The ticket price is $7.00');
	}
	else {
		console.log('The ticket price is $12.00');
	}
};
