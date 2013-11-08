// Steven Swayngim 11/4/2013 Expressions Worksheet

//What is the lowest amount of packs of hotdogs and buns needed to run out at the same time.

//Prompt asking how many adults there are. Adults eat a hot dog and a bun
var adults = prompt('How many adults are there?');

//Prompt asking how many kids there are.  Kids eat a hot dog with no bun.
var kids = prompt('How many kids are there?');

//Prompt asking how many dogs.  Dogs eat hot dog with no bun.
var pets = prompt('how many pets are there?');

//Set the amount of people eating buns
var bunEaters = parseInt(adults);

//Set the amount of people eating hotdogs
var hDEaters = parseInt(adults) + parseInt(kids) + parseInt(pets);

//Find out the lowest amount of packs of buns needed to use up the packs with no extras
var minBuns = 1;
while ((minBuns*10)%bunEaters != 0){
	minBuns++;
};

//Find out the lowest amount of packs of hot dogs needed to use up the packs with no extras
var minHDs = 1;
while ((minHDs*8)%hDEaters != 0){
	minHDs++;
};
//set additional variables
var bunsNeeded = 0;
var x = 0;
var count = 1;

while (x<1){

//Calculate the amount of buns used
var bunsNeeded = ((minHDs*8*count)/hDEaters)*bunEaters;
//Determine if it is divisible by the lowest amount of hot dog buns needed.
if (bunsNeeded%(minBuns*10)==0){
//If the amount of hot dogs buns used can be evenly divided by the minbuns
	x=1;
//Print Results
	console.log('You need ' + (minHDs*count) + ' packs of hot dogs, and ' + (bunsNeeded/10) + ' packs of buns.');
}
//Loop back through and do it again
else{
	count++ ;
};
};
