//Steven Swayngim 11/9/13 Functions Worksheet
//Circumference

//Set the givens
var radius = 4;

//Formula for circumference is 2 * PI * r (r is the only parameter)
function calculateCircumference(r){
	return (2*Math.PI*r);
};

//Print to console log
console.log('The circumference of the circle is ' + calculateCircumference(radius));

//Stung!

//Set givens
var pounds = 198;

//Formula to calculate the bee stings is 8.666666667*body weight (lbs is the only parameter)
function calculateStings(lbs){
	return ( lbs * 8.666666667);
};

//print to console