/********************************************************
* @author		Daan Meert
* @created    	25/02/2016
* @modified   	25/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
var wiskundigeBewerkingen = function (getal1, getal2) {
  var som = getal1 + getal2;
  var verschil = getal1 - getal2;
  var product = getal1 * getal2;
  var quofient = getal1 / getal2;
  divResult.innerHTML += getal1 + " + " + getal2 + " = " + som + "<br>"; 
  divResult.innerHTML += getal1 + " - " + getal2 + " = " + verschil + "<br>"; 
  divResult.innerHTML += getal1 + " * " + getal2 + " = " + product + "<br>"; 
  divResult.innerHTML += getal1 + " / " + getal2 + " = " + quofient + "<br>"; 
}

getal1 = parseInt(window.prompt("Geef een eerste getal"));
getal2 = parseInt(window.prompt("Geef een tweede getal"));
divResult.innerHTML += "getal 1 = " + getal1 + "<br>"; 
divResult.innerHTML += "getal 2 = " + getal2 + "<br>"; 
var resultaat = wiskundigeBewerkingen(getal1, getal2);