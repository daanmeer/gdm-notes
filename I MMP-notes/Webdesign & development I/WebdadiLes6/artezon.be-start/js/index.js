/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                                           *                                                                         *
 *                                                                           *
 *                        aaaAAaaa            HHHHHH                         *
 *                     aaAAAAAAAAAAaa         HHHHHH                         *
 *                    aAAAAAAAAAAAAAAa        HHHHHH                         *
 *                   aAAAAAAAAAAAAAAAAa       HHHHHH                         *
 *                   aAAAAAa    aAAAAAA                                      *
 *                   AAAAAa      AAAAAA                                      *
 *                   AAAAAa      AAAAAA                                      *
 *                   aAAAAAa     AAAAAA                                      *
 *                    aAAAAAAaaaaAAAAAA       HHHHHH                         *
 *                     aAAAAAAAAAAAAAAA       HHHHHH                         *
 *                      aAAAAAAAAAAAAAA       HHHHHH                         *
 *                         aaAAAAAAAAAA       HHHHHH                         *
 *                                                                           *
 *                                                                           *
 *                                                                           *
 *      a r t e v e l d e  u n i v e r s i t y  c o l l e g e  g h e n t     *
 *                                                                           *
 *                                                                           *
 *                                MEMBER OF GHENT UNIVERSITY ASSOCIATION     *
 *                                                                           *
 *                                                                           *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * @author
 * @created	   dd/mm/jjjj 
 * @modified   dd/mm/jjjj
 * @copyright  Copyright © 2015-2016 Artevelde University College Ghent
 * @function   beschrijf wat het script doet
 * TODO: vervolledig bovenstaande informatie en wis deze todo
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function oefEen(){
	var naam = "Meert";
	var voorNaam = "Daan";
	document.getElementById("greetingheader").innerHTML = "Welkom " + naam +" "+ voorNaam + " !";
}
function oefTwee(){
	var today = new Date();
	var ditJaar = today.getFullYear();
	document.querySelector("footer p").firstChild.nodeValue = "Copyright \xA9 2014-" + ditJaar + " ";
}
function oefDrie(){
	var nieuwArtikel = {
	        titel: "Slow-Bowl",
	        prijs: "24.99 euro",
	        urlAfbeelding: "images/185b_slo_bowl.jpg",
	        omschrijving: "Dogs live relatively simple lives. They look forward to: walks, playing, petting, sleeping, and eating. Like Caesar says, dogs live in the moment, which means they can view each and every meal like it is their first and their last."
	};
	var laatsteArtikel = document.querySelector("article:first-child");
	var dupliceerArtikel = laatsteArtikel.cloneNode(true); 
	
	dupliceerArtikel.querySelector(".price").lastChild.nodeValue = nieuwArtikel.prijs.split(" ")[0];
	dupliceerArtikel.querySelector("p").textContent = nieuwArtikel.omschrijving;
	dupliceerArtikel.querySelector("img").setAttribute("src", nieuwArtikel.urlAfbeelding);
	dupliceerArtikel.querySelector("h1").textContent = nieuwArtikel.titel;
	document.querySelector(".row").appendChild(dupliceerArtikel);
}
function oefVier(){
	var kleuren = ["blue", "purple", "green", "red", "orange", "yellow" ];
	var artikels = document.querySelectorAll("article");
	for(var i=0; i< artikels.length;i++){
    	var kleur = kleuren[i%6];
    	var a = artikels[i].getAttribute("class");
    	artikels[i].setAttribute("class", a + " " + kleur);
    	}
}
function oefVijf() {	

}

oefEen();
oefTwee();
oefDrie();
oefVier();
oefVijf();