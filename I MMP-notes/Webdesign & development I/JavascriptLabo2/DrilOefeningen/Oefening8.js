/********************************************************
* @author		Daan Meert
* @created    	25/02/2016
* @modified   	25/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
function nameEmail() {
	function splitF(a) {
	  return a.split(" ");
	}
	var str = prompt("Geef je naam", "");
	var string = splitF(str);
	var mail = (string[0] + "." + string[1]).toLowerCase();
	document.getElementById("result").innerHTML = "<span>Voornaam:</span> " + string[0] + "<br><span>Familienaam:</span> " + 
	string[1] + "<br><span>E-mailadres:</span> " + mail + "@student.arteveldehs.be";
}
nameEmail();