/********************************************************
* @author		Daan Meert
* @created    	03/03/2016
* @modified   	03/03/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
function schrikkelJaar(a) {
	var b = a + " is een ";
	if (a % 4 === 0) {
		return b + "schrikkeljaar";
	}
	else {
		return b + "geen schrikkeljaar";
	}
}
var input = parseInt(prompt("Geef een jaartal in"));
document.getElementById("divResult").innerHTML = schrikkelJaar(input);
