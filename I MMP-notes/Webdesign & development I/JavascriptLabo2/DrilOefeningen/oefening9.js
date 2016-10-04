/********************************************************
* @author		Daan Meert
* @created    	25/02/2016
* @modified   	25/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
function findDomain() {	
	var str = prompt("Geef je email", "");
	var at = str.indexOf("@")+1;
	var n = str.lastIndexOf(".");
	var atg = parseInt(at);
	var ng = parseInt(n);
	var dom = str.substring(atg, ng);
	document.getElementById("result").innerHTML = "domein: " + dom;
}
findDomain();