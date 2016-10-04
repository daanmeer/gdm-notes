/********************************************************
* @author		Daan Meert
* @created    	25/02/2016
* @modified   	25/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/

/*
	Deze oefening is bedoeld om vertrouwd te worden met hoe je objecten maakt en gebruikt door een aantal zaken uit te testen.
	Maak een object persoon: mijnPersoon. Doe dat eerst met de literal notation.
*/

/*

var mijnPersoon = {
	naam: "Meert", 
	voornaam: "Daan", 
	woonplaats: "Aalst",
    uit : function() {
       return this.voornaam;
    }
};
document.getElementById("uitkomst").innerHTML = mijnPersoon.uit();

*/

/*
	Doe het daarna ook met de constructor notation. 
	De persoon moet een naam, voornaam en een woonplaats hebben, maar de waarden zijn uiteraard vrij te kiezen.
	Nadat je dit object gemaakt heb, schrijf ook een statement om de voornaam van jouw object mijnPersoon op het scherm te schrijven.
*/

/*

function Pesonal(naam, voornaam, woonplaats) {
    this.naam = naam;
    this.voornaam = voornaam;
    this.woonplaats = woonplaats;
}
var mijnPersoon = new Pesonal("Meert", "Daan", "Aalst");
document.getElementById("uitkomst").innerHTML = mijnPersoon.voornaam;

*/

/* 	
	Schrijf nu een statement om de property voornaam van mijnPersoon aan te passen
	Voeg nu ook de property leeftijd toe, zonder iets aan de constructor te veranderen en schrijf onder op het scherm “
	[gewijzigde naam] is [leeftijd] jaar”
*/

/*

function Pesonal(naam, voornaam, woonplaats) {
    this.naam = naam;
    this.voornaam = voornaam;
    this.woonplaats = woonplaats;
    this.changeName = function (name) {
        this.voornaam = name;
    }
}
var mijnPersoon = new Pesonal("Meert", "Daan", "Aalst");
mijnPersoon.changeName("Dries");
mijnPersoon.leeftijd = "24";
document.getElementById("uitkomst").innerHTML =  mijnPersoon.voornaam + " is " + mijnPersoon.leeftijd;

*/

/*

	Breid nu je object met een methode waarWoontPersoon die de volgende output heeft:
	voornaam naam woont in woonplaats.
	Zet je vorige probeersels in commentaar en maak nu een constructorfunctie Persoon(voornaam, naam, woonplaats) met een methode waarWoontPersoon. 
	Gebruik die vervolgens om nog een aantal persoon objecten te maken.

*/

function Pesonal(naam, voornaam, woonplaats) {
    this.naam = naam;
    this.voornaam = voornaam;
    this.woonplaats = woonplaats;
    this.changeName = function (name) {
        this.voornaam = name;
    }
    this.waarWoontPersoon = voornaam + " " + naam + " woont in " + woonplaats;
}
var daan = new Pesonal("Meert", "Daan", "Aalst");
var dries = new Pesonal("Meert", "Dries", "Aalst");
var peter = new Pesonal("Meert", "Peter", "Aalst");
daan.changeName("Dries");
daan.leeftijd = "24";
document.getElementById("uitkomst").innerHTML =  daan.waarWoontPersoon + "<br>" + dries.waarWoontPersoon + "<br>" + peter.waarWoontPersoon;









