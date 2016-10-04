/********************************************************
* @author		Daan Meert
* @created    	03/03/2016
* @modified   	03/03/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
function priemGetal(a) {
for(var i = 2; i < a; i++) {
    if(a % i === 0) {
        return false;
    }
}
return a > 1;
}

function priem(){	
	if (priemGetal(input) == false) {
		return input + " is geen priemgetal";
	} 
	else {
		return input + " is een priemgetal";
	}
}

var input = parseInt(prompt("Geef een getal in"));
document.getElementById("divResult").innerHTML = priem(input);
