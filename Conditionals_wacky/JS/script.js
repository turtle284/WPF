//Steve Swayngim 11/13/2013 Conditionals Wacky

//Calculate how many steps it takes for a creature to finish their journey 

//Set the variables
var miles = 0; 
var type = "";
var feet = 0;
var steps =0;

//set the distance for the Journey
miles = prompt('How far do you need to travel in miles');

//Validate that a value was entered
if ( miles == '' || miles == null || miles == undefined){
	alert('Please enter a distance');
};
