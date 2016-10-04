/********************************************************
* @author		Daan Meert
* @created    	03/03/2016
* @modified   	03/03/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
document.getElementById("divResult").innerHTML = berekening(10);
function berekening(a) {
	var text = "";
    for (var i = a; i > 0; i--) {
    	var e = i * a;
        text += i + " maal " + a + " = " + e + "<br>";
    }
	return text;
}
