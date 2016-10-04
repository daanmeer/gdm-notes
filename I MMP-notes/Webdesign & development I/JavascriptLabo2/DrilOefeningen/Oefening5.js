/********************************************************
* @author		Daan Meert
* @created    	25/02/2016
* @modified   	25/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
/**
* @param {Number} g1 - a *
* @returns {a / 33.8000
*/
function graden(){
	function omrekenenCelcius(a) {
	    return a * 9/5 + 32;
	}
	var getal1 = parseInt(prompt("Geef je graden in"));
	document.getElementById("uitkomst").innerHTML = omrekenenCelcius(getal1) + "°C";
}
graden();