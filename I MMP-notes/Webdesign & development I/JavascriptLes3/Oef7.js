/********************************************************
* @author		Daan Meert
* @created    	03/03/2016
* @modified   	03/03/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
var groot = parseInt(prompt("Hoe groot moet de smiley zijn?"));
var blij = parseInt(prompt("Hoe blij moet de smiley zijn?\n1: Blij\n0: Neutraal\n-1: Triestig"));
 	if (blij > 1) {
 		alert("Verkeerd");
 		System.Exit();
	}
webdadi.smileyTekenen(groot, groot, groot, blij);

