//================VARIABLES================
var population = 5;
var maxPopulation = 5;
var woodcutter = 0;
var stonecutter = 0;
//================DISPLAY-VARIABLES================
document.getElementById("population").innerHTML = population;
document.getElementById("maxPopulation").innerHTML = maxPopulation;
document.getElementById("woodcutter").innerHTML = woodcutter;
document.getElementById("stonecutter").innerHTML = stonecutter;
//================FUNCTIONS================
function woodUp() {
	if(population > 0) {
		population = population - 1;
		woodcutter = woodcutter + 1;
		document.getElementById("woodcutter").innerHTML = woodcutter;
		document.getElementById("population").innerHTML = population;
	}
}
function woodDown() {
	if(woodcutter > 0) {
		population = population + 1;
		woodcutter = woodcutter - 1;
		document.getElementById("woodcutter").innerHTML = woodcutter;
		document.getElementById("population").innerHTML = population;
	}
}
function stoneUp() {
	if(population > 0) {
		population = population - 1;
		stonecutter = stonecutter + 1;
		document.getElementById("stonecutter").innerHTML = stonecutter;
		document.getElementById("population").innerHTML = population;
	}
}
function stoneDown() {
	if(stonecutter > 0) {
		population = population + 1;
		stonecutter = stonecutter - 1;
		document.getElementById("stonecutter").innerHTML = stonecutter;
		document.getElementById("population").innerHTML = population;
	}
}