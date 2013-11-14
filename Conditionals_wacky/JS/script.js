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

//Set the type of creature on a journey
type = prompt('What type of Creature is on the Journey? (Hobbit, Dwarf, Elf, or Ogre)');

//Validate that a value was entered
if ( type == '' || type == null || type == undefined){
	alert('Please enter a type');
};

//Convert miles to feet
feet = miles * 5280;

//Create a swith to determine the size of their feet and calculate the steps
	switch(type){
//If type is Hobbit
		case 'Hobbit':
			steps = feet / .3; 
			break;
//If type is Dwarf
		case 'Dwarf':
			steps = feet / .5;
			break;
//If type is Elf
		case 'Elf':
			steps = feet / 1;
			break;