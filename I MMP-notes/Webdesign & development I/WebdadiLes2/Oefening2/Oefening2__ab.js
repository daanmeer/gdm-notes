/********************************************************
* @author		Daan Meert
* @created    	25/02/2016
* @modified   	25/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
   function makeArray(getal1,getal2) {
        var myArray = new Array(4);
        myArray[0] = g1 + g2;
        myArray[1] = g1 - g2;
        myArray[2] = g1 / g2;
        myArray[3] = g1 * g2;
        return myArray;
   }
   function showArray(theArray){
        var quote = "";
        for (var i = 0; i < theArray.length; i++){
            quote += theArray[i] + " <br> ";
        }
        return quote;    
   }
   		var getal1 = prompt("Geef je getal", "");
		var getal2 = prompt("Geef je getal", "");
		var g1 = parseInt(getal1);
		var g2 = parseInt(getal2);
   	    var x = makeArray(g1,g2) ;
		document.getElementById("uitkomst").innerHTML = showArray(x);