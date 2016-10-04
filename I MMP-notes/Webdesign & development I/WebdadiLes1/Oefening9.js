/********************************************************
* @author		Daan Meert
* @created    	18/02/2016
* @modified   	18/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/

var eg = prompt("Eerste getal", "..");
var tg = prompt("Tweede getal", "..");
var num1 = parseInt(eg);
var num2 = parseInt(tg);
var som = num1 + num2;
var verschil = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var rest = num1 % num2;

document.write("De som van " + eg + " en " + tg + " is " + som + "<br>Het verschil van " + eg + " en " + tg + " is " + verschil + 
	"<br>Het product van " + eg + " en " + tg + " is " + product +"<br>" +eg + " gedeeld door " + tg + " is " + quotient + " met rest " + rest);

