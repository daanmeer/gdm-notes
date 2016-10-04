/********************************************************
* @author		Daan Meert
* @created    	03/03/2016
* @modified   	03/03/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
var inp = prompt("Geef je score op 20");
var input = parseInt(inp);
if (isNaN(inp)==false) {
	function feedback() {	
		if (input > 20) {
			alert("Getal kleiner dan 20 ingeven");
			System.exit(0);
		}
		var a = input + " op 20? "
		if (input >= 13){
			document.getElementById("divResult").innerHTML = a + "Proficiat, onderscheiding!";
		}
		else if ( input >= 10){
			document.getElementById("divResult").innerHTML = a + "Proficiat, geslaagd!";
		} 
		else {
			document.getElementById("divResult").innerHTML = a + "Jammer, gebuisd";
		}
	}
}
else {
	alert("Is een getal getal");
	System.exit(0)
}
feedback();
