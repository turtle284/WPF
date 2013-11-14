//Steve Swayngim 11/13/2013 Conditionals Industry

//Calculate the amount of payment you will receive for your accident`

//set the variables
var type ="";
var damage = 0;
var deductible = 0;

//Enter given on the type of accident
var type = prompt('What type of accident occurred? (Personal, Auto, or Medical)');

//Validate that a value was entered
if ( type == '' || type == null || type == undefined){
	alert('Please enter a type');
};
