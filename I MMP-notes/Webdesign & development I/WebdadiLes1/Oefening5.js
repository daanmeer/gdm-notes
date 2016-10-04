/********************************************************
* @author		Daan Meert
* @created    	18/02/2016
* @modified   	18/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/

var huidingJaartal ="2016";
var geboorteJaar = "1994";
var mogelijkeLeeftijd = document.getElementById('uitkomst');
mogelijkeLeeftijd.textContent = "Huidig jaartal " + huidingJaartal + "<br>Geboortejaar " + geboorteJaar + "<br>Mogelijke leeftijd " + (huidingJaartal - geboorteJaar) + " of " + ((huidingJaartal - geboorteJaar)-1);