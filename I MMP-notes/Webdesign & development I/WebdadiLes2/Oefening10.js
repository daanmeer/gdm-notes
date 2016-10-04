/********************************************************
* @author		Daan Meert
* @modified   	25/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
function jaar() {
	var d = new Date();
	var da = d.getDate();
	var m = d.getMonth() + 1;
	var y = d.getFullYear();
	var ho = d.getHours();
	var min = d.getMinutes();
	uitkomst = "Vandaag is het " + da + " / " + m + " / " + y + "<br>Het is " + ho + "u" + min ;
	return uitkomst;
}
document.getElementById("result").innerHTML = jaar();
var a = new Date();
var ye = a.getFullYear();
document.getElementById("footer").innerHTML = ye;




