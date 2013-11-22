//Steve Swayngim 11/21/13 Functions Wacky
//How long can you survive a zombie apocalypse

//declare variables
var chips = 0;
var bullets = 0;
var gallons = 0;

//enter prompts
chips = prompt('How many bags of chips do you have?');

bullets = prompt('How many bullets do you have?');

gallons = prompt('How many gallons of water fo you have?');

//start anonymous function 
var timeLength = function(food, ammo, water){

//calculate how long the water will last in weeks
//you use 2 gallons of water per day
var waterLength = (water/2)/7;

//calculate how long the food will last in weeks
//you eat 3 bags of chips per day
var foodLength = (food/3)/7;

//calculate how long the ammo will last in weeks
//you use a bullet a day
var ammoLength = ammo/7;