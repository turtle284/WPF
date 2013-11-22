//Steven Swayngim 11/19/13 Functions Personal
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