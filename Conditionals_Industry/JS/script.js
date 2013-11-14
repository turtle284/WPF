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

//Enter the amount of damage
var damage = prompt('What is the total amount of damage?');

//Validate that a value was entered
if ( damage == '' || damage == null || damage == undefined){
	alert('Please enter an amount');
};

//Enter the year the policy was issued
var year = prompt('What year was the policy issued?');

//Validate that a value was entered
if ( year == '' || year == null || year == undefined){
	alert('Please enter an amount');
};

//Create a new conditional to determine the deductible
if (year < 1989){
//If the policy was issued before 1989 there is a $5k deductible
	deductible = 5000;
}
else if (year >= 1989 && year <= 1999){
//if the policy was issued between 1989 and 2000 then there is a $2,500 deductible
	deductible = 2500;
}
else {
//if the policy was issued after 1999 then there is a $500 deductible
	deductible = 500;
};

if(damage < deductible){
//Create a new conditional to determine if the damage is greater than the deductible
//If the damage is less 
//Print Message to the console
	console.log('The damage does not exceed the deductible');
}
else{
//If the damage is more
//Create a swith to determine what is the retention and message
	switch(type){
//If type is Auto
		case 'Auto':
			console.log('Your damages exceed your deductible.  We will pay you 90% of the difference in the amount of $' + ((damage-deductible)*.9) + '.'); 
			break;
//If type is Personal
		case 'Personal':
			console.log('Your damages exceed your deductible.  We will pay you 80% of the difference in the amount of $' + ((damage-deductible)*.8) + '.'); 
			break;
//If type is Medical
		case 'Medical':
			console.log('Your damages exceed your deductible.  We will pay you 70% of the difference in the amount of $' + ((damage-deductible)*.8) + '.'); 
			break;
//If it is none of the above
		default:
			console.log('That type of accident is not covered by your policy');
	}
};