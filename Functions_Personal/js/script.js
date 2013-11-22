//Steven Swayngim 11/20/13 Functions Personal
//Calculate how much food to eat

//define the variables

var currentWeight = 0;

var food = 0;

//create the prompts
currentWeight = prompt('How much do you weigh in pounds?');

var food = prompt('How much food do you eat in pounds?');

//begin a named function
function diet(weight, food){
//calculate how much food you need to eat 1/10th of your body weight
var foodNeed = weight * .1;
//set a variable for the results
var result = '';
//compare to how much food you do eat
if (food > foodNeed){
//if you eat too much
	result = 'You need to eat less';
}
else if (food < foodNeed){
//if you don't eat enough
	result = 'You need to eat more';
}
else {
//if you eat the right amount
	result = 'You are eating the right amount';
};

//return value
return result;

//call function
var output = diet(currentWeight, food);

//print to console
console.log(output);
