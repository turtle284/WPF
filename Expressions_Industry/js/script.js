//Steve Swayngim 11/4/2013 Industry Expression

//Calculate how many oil drums you need to order for the month

//Prompt asking how many vehicles are in your fleet?
var fleet = prompt('How many vehicles are in your fleet');

//Create an array that will hold your fleet info
var vehicles = new Array();

//Code prompts user for the type of vehicle in the fleet and builds an array
function vehicleModel(n){
	for (i=0; i<n; i++){
//creates a loop that lasts for the size of the fleet
		vehicles[i] = prompt('What type of vehicle is it? Truck or Reefer?');
	};
};
//This will run for each car in your fleet
vehicleModel(fleet);

//Prompt asking how many barrels of oil are currently instock.
var barrels = prompt('How many barrels of oil do you currently have?');

//Each barrel hold 10gallons.  You need to convert that to Quarts
var stock = barrels * 10 * 4;

//Set variables for trucks and reefers
var truck = 0;
var reefer = 0;

//set patterns to identify each
var patTruck = /truck/i;
var patReefer = /reefer/i;

//Loop through the array and count how many of each type of vehicle there is
for (i=0; i<vehicles.length; i++){
//Matches which type you entered and counts them
	if (vehicles[i].match(patTruck) != null){
		truck+=1;
	}
	else if (vehicles[i].match(patReefer) != null){
		reefer+=1;
	}
};


//Calculate the total amount of oil needed for the fleet (in quarts).  Trucks use 40qtrs reefers use 35.
var required = (truck*40)+(reefer*35);

//Subtract the amount of oil you currently have
var total = required - stock;

//Determine the amount of barrels needed
var order = Math.ceil(total/40);



//Print out results to the console
if (order<0){
//if the order is less than 0
	console.log('You do not need any barrels.');
}
//otherwise
else{
	console.log('You need ' + order + ' barrels of oil.');
};