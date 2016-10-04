/********************************************************
* @author		Daan Meert
* @created    	03/03/2016
* @modified   	03/03/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
function mail(a) {
	var n = a.indexOf("@");
	var m = a.lastIndexOf(".");
	var o = a.substring(0, n).length;
	var p = a.substring(n, m).length;
	var f = "Foutmelding : ";
	if (n > -1) {
		if (o > 0){			
			if (m > n && m < a.length-1 && p > 1){
				return "geldig";
			}
			else {
				return f + "na de string komen geen 2 strings gescheiden door een punt";
			}
		}
		else {
			return f + "er staat geen string voor @";
		}
	}
	else {
		return f + "de string bevat geen @";
	}
}

var input = prompt("Geef een geldig emailadres in");
document.getElementById("divResult").innerHTML = mail(input);