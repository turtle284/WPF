//Steve Swayngim 11/4/2013 Industry Expression

//Calculate how many oil drums you need to order for the month

//Prompt asking how many vehicles are in your fleet?
var fleet = prompt('How many vehicles are in your fleet');

//Create an array that will hold your fleet info
var vehicles = new Array();

//Code prompts user for the type of vehicle in the fleet and builds an array
function vehicleModel(n){
	for (i=0; i<n; i++){
		vehicles[i] = prompt('What type of vehicle is it? Truck or Reefer?');
	};
};
//This will run for each car in your fleet
vehicleModel(fleet);

//Prompt asking how many barrels of oil are currently instock.
var barrels = prompt('How many barrels of oil do you currently have?');

//Each barrel hold 10gallons.  You need to convert that to Quarts

//set patterns to identify each

//Loop through the array and count how many of each type of vehicle there is

//Calculate the total amount of oil needed for the fleet (in quarts).  Trucks use 40qtrs reefers use 35.

//Subtract the amount of oil you currently have

//Determine the amount of barrels needed


//Print out results to the console
