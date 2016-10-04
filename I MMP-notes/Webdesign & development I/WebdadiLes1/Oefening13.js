/********************************************************
* @author		Daan Meert
* @created    	18/02/2016
* @modified   	18/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/

var totalSec = prompt("Seconden", "");
var hours = parseInt( totalSec / 3600 ) % 24;
var minutes = parseInt( totalSec / 60 ) % 60;
var seconds = totalSec % 60;

var result = "H: " + hours + " M: " + minutes + " S: " + seconds;
document.write("Het aantal seconden dat u invoerde is " + totalSec + "<br>Het aantal seconden dat u invoerde is " + totalSec + " en komt overeen met " + result);