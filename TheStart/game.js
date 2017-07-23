//================VARIABLES================
var population = 5;
var maxPopulation = 5;
//workers
var woodcutter = 0;
var stonecutter = 0;
var cropfarmer;
var livestockfarmer;
var miner;
var smithy;
var builder;
var fletcher;
var herbalist;
var alchemist;
var armourer;
var weaponsmith;
//military


//products
var wood = 0;
var stone = 0;
//buildings


//================DISPLAY-VARIABLES================
document.getElementById("population").innerHTML = population;
document.getElementById("maxPopulation").innerHTML = maxPopulation;
document.getElementById("woodcutter").innerHTML = woodcutter;
document.getElementById("stonecutter").innerHTML = stonecutter;
//================FUNCTIONS================
function woodUp() {
	if(population > 0) {
		population -= 1;
		woodcutter += 1;
		document.getElementById("woodcutter").innerHTML = woodcutter;
		document.getElementById("population").innerHTML = population;
	}
}
function woodDown() {
	if(woodcutter > 0) {
		population += 1;
		woodcutter -= 1;
		document.getElementById("woodcutter").innerHTML = woodcutter;
		document.getElementById("population").innerHTML = population;
	}
}
function stoneUp() {
	if(population > 0) {
		population -= 1;
		stonecutter += 1;
		document.getElementById("stonecutter").innerHTML = stonecutter;
		document.getElementById("population").innerHTML = population;
	}
}
function stoneDown() {
	if(stonecutter > 0) {
		population += 1;
		stonecutter -= 1;
		document.getElementById("stonecutter").innerHTML = stonecutter;
		document.getElementById("population").innerHTML = population;
	}
}