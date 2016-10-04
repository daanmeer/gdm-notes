/********************************************************
* @author		Daan Meert
* @modified   	25/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/

function Pesonal(straal, omtrek, oppervlakte) {
    this.straal = straal;
    this.omtrek = omtrek;
    this.oppervlakte = oppervlakte;
}

var straal = parseInt(window.prompt("Geef de straal"));
var oppe = straal * straal;
var opper = oppe * Math.PI;
var omtr = (2 * straal * Math.PI).toFixed(2);
var mijnPersoon = new Pesonal(straal, omtr , oppe);
document.getElementById("result").innerHTML =  "Een cirkel met straal " + mijnPersoon.straal + " m heeft een omtrek van " + mijnPersoon.omtrek + " m en een oppervlakte van " + mijnPersoon.oppervlakte + " m2."
