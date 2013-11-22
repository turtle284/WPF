//Steve Swayngim 11/21/13 Functions Industry
//check if they enter a valid credit card number
//define the variables
var myCards = ['0000000000000000','1234567887654321','1111111111111111'];

var checkCard ='';
//enter the prompts
var checkCard = prompt('Please enter your 16 digit card number.');
//begin a named function
function validate(array, card){
	var result = 'This is not your card';
	//loop through the array
		for (i=0; i<array.length; i++){
		//compare the enter value to the array
		if(array[i] === card){
			result = 'This is your card';
			};
};
//return a value
return result;
};
//call the function
var output = validate(myCards,checkCard);
//print results to the console
console.log(output);