/********************************************************
* @author		Daan Meert
* @created    	25/02/2016
* @modified   	25/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/

/*var auto = {
	merk: "Audi", 
	model: "A5", 
	aantalDeuren : 5, 
	bouwjaar: 2015,
	prijs : "30.000",
    uit : function() {
       return this.prijs;
    }
};
document.getElementById("uitkomst").innerHTML = auto.uit();
*/

function Auto(merk, model, aantalDeuren, bouwjaar) {
    this.merkName = merk;
    this.modelName = model;
    this.aantalDeuren = aantalDeuren;
    this.bouwjaar = bouwjaar;
}
var audiA5 = new Auto("Audi", "A5", 5, 2015);
var mercedes500 = new Auto("Mercedes", "500SL", 5, 2014);
document.getElementById("uitkomst").innerHTML = "<span>Merk:</span> " + mercedes500.merkName + "<br><span>Model: </span>" + mercedes500.modelName + "<br><span>Aantal deuren: </span>" + mercedes500.aantalDeuren + "<br><span>Bouwjaar: </span>" + mercedes500.bouwjaar;