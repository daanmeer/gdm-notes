/********************************************************
* @author		Daan Meert
* @created    	18/02/2016
* @modified   	18/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/

var hoog = prompt("Hoogte", "in px");
var breed = prompt("Breedte", "in px");
var num1 = parseInt(hoog);
var num2 = parseInt(breed);
var oppervlakte = num1 * num2;
var omtrek = (num1 + num2) * 2; 

document.getElementById("myH1").style.backgroundColor = breed;
document.getElementById("myH1").style.width = breed;
document.getElementById("myH1").style.height = hoog;

document.write("De oppervlakte is " + oppervlakte + "px <br>");
document.write("De omtrek is " + omtrek + "px");
