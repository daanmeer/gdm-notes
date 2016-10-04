/********************************************************
* @author		Daan Meert
* @created    	03/03/2016
* @modified   	03/03/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
function ingevenNummer(){
	var input = prompt("Geef je rekeningnummer");
	if (input.length == 12) {
		var laat = parseInt(input.substring(10,12));
		var voor = parseInt(input.substring(0,10));
		var oplossing = voor % 97;
		if (oplossing == laat) {
			alert("Correct nummer");
		}
		else {
			verkeerd();
		}
	}
	else {
		verkeerd();
	}
	function verkeerd(){	
		alert("Is geen correct nummer");
	}
}
ingevenNummer();	
