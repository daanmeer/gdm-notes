/********************************************************
* @author		Daan Meert
* @created    	17/03/2016
* @modified   	17/03/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
document.getElementById("divResult").innerHTML = whileLoop(10);
function whileLoop(a) {
    var text = "";
    var i = a;
    while (i > 0) {
    	var b = i *10;
        text += i + " maal " + a + " = " + b + "<br>";
        i--;
    }
    return text
}

document.getElementById("divResult").innerHTML = doWhileLoop(10);
function doWhileLoop(a) {
    var text = "";
    var i = a;
    do {
    	var b = i *10;
        text += i + " maal " + a + " = " + b + "<br>";
        i--;
    } while (i > 0);
    return text
}
