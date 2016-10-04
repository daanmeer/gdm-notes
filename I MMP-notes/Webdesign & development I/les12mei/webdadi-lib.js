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
 * @author     docenten WEBDAD-I
 * @created	   09/03/2016
 * @modified
 * @copyright  Copyright © 2015-2016 Artevelde University College Ghent
 *
 * @function   webdadi library die functies bevat van tijdens de praktijklessen
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var webdadi = (function(){
    var mijnTekenObject;

    return {
        /**
         * deze functie
         * retourneert het domein uit een e-mailadres met structuur voornaam.naam@domein.be
         * @param {string} emailadres - emailadres van de vorm voornaam.naam@domein.be
         * @returns {string} domein
         */
        domeinBepalen: function (emailadres) {
            var positieAt = emailadres.indexOf("@");
            var stringNaAt = emailadres.substring(positieAt + 1);
            var positiePuntNaAt = stringNaAt.lastIndexOf(".");
            var domein = stringNaAt.substring(0, positiePuntNaAt);
            return domein;
        },

        /*****
         * deze functie rekent graden fahrenheit om naar graden Celsius
         * @param {Number} f - graden fahrenheit
         * @returns {Number} c - graden celsius
         *****/
        fahrenheitNaarCelsius: function (f) {
            var c = (f - 32) / 1.8;
            return c;
        },
        /*
         * deze functie rekent graden celsius om naar graden fahrenheit
         * @param {Number} c - graden celsius
         * @returns {Number} f - graden fahrenheit
         */
        celsiusNaarFahrenheit: function (c) {
            var f = 32 + 1.8 * c;
            return f;
        },
        /**
         * Maakt een datum string
         * @params {Date object} De datum waarvan je een datumstring wil maken
         * @returns {String} Vandaag is het DD / MM / YYYY
         */
        maakDatumString: function(vandaag){
            var datumstring = vandaag.getDay("DD") + " / "
                + vandaag.getMonth("MM") + " / " +
                + vandaag.getFullYear() + "<br>";
            return (datumstring);
        },
        /**
         * Maakt een datum string
         * @params {Date object} De datum waarvan je een datumstring wil maken
         * @returns {String} Het is HHuMM
         */
        maaktTijdString: function(vandaag){
            var tijdString = vandaag.getHours() + " u " + vandaag.getMinutes() + "<br>";
            return (tijdString);
        },
        /**
         * string "voornaam naam" splitsen en retourneren als object
         * @param {string} input - string opgebouwd als "voornaam naam"
         * @returns {object} properties voornaam, familienaam, emailadres
         */
        naamSplitsen: function (input) {
            var positieSpatie = input.indexOf(" ");
            var voornaam = input.substring(0, positieSpatie);
            var familienaam = input.substring(positieSpatie + 1);
            var familienaamZonderSpaties = familienaam.replace(" ","");
            return {
                voornaam: voornaam,
                familienaam: familienaam,
                emailadres: voornaam + "." + familienaamZonderSpaties + "@student.arteveldehs.be"
            }
        },
        /**
         * functie tekenGezicht
         * @param {number} middenx - x-coördinaat van middelpunt van de tekenen smiley
         * @param {number} middeny - y-coördinaat van middelpunt van de tekenen smiley
         * @param {number} straal -  straal van de tekenen smiley
         * @param {number} emotie -  -1 droevig, 0 neutraal, 1 blij
         * @returns /
         */
        tekenGezicht: function(middenx, middeny, straal, emotie){
            mijnTekenObject.beginPath();
            mijnTekenObject.arc(middenx, middeny, straal,0,2*Math.PI);
            //kleur gezicht laten afhangen van emotie
            switch(emotie){
                case -1:
                {
                    mijnTekenObject.fillStyle = "red";
                    break;
                }
                case 0:
                {
                    mijnTekenObject.fillStyle = "yellow";
                    break;
                }
                case 1:
                default :
                {
                    mijnTekenObject.fillStyle = "green";
                    break;
                }
            }//end switch
            mijnTekenObject.fill();
            mijnTekenObject.strokeStyle = "black";
            mijnTekenObject.stroke();
        },
        /**
         * functie tekenOgen
         * @param {number} middenx - x-coördinaat van middelpunt van de tekenen smiley
         * @param {number} middeny - y-coördinaat van middelpunt van de tekenen smiley
         * @param {number} straal -  straal van de tekenen smiley
         * @returns /
         */
        tekenOgen: function(middenx, middeny, straal) {
            //positie ogen
            var hoogteOgen = middeny - straal/3.5;
            var horAfstandTotMidden = straal/3;
            //linkeroog tekenen
            mijnTekenObject.beginPath();
            mijnTekenObject.arc(middenx-horAfstandTotMidden, hoogteOgen, straal/6, 0, 2*Math.PI);
            mijnTekenObject.fillStyle = "black";
            mijnTekenObject.fill();
            //rechteroog tekenen
            mijnTekenObject.beginPath();
            mijnTekenObject.arc(middenx+horAfstandTotMidden, hoogteOgen, straal/6, 0, 2*Math.PI);
            mijnTekenObject.fill();
    },
        /**
        * functie tekenMond
        * @param {object} canvas - canvas-element waarop getekend wordt
        * @param {number} middenx - x-coördinaat van middelpunt van de tekenen smiley
        * @param {number} middeny - y-coördinaat van middelpunt van de tekenen smiley
        * @param {number} straal -  straal van de tekenen smiley
        * @returns /
        */
        tekenMond: function(middenx, middeny, straal, emotie) {
            mijnTekenObject.beginPath();
            switch(emotie){
                case -1:
                {
                    mijnTekenObject.arc(middenx,middeny+3*straal/6,straal/2,0,Math.PI,true);
                    break;
                }
                case 0:
                {
                    mijnTekenObject.moveTo(middenx-straal/2,middeny+1.7*straal/6);
                    mijnTekenObject.lineTo(middenx+straal/2,middeny+1.7*straal/6);
                    break;
                }
                case 1:
                default :
                {
                    mijnTekenObject.arc(middenx, middeny + straal / 6, straal / 2, 0, Math.PI);
                    break;
                }
            }//end switchmijnTekenObject.stroke();
            mijnTekenObject.stroke();
        },
        /**
         * functie tekenSmiley
         * @param {object} canvas - canvas-element waarop getekend wordt
         * @param {number} middenx - x-coördinaat van middelpunt van de tekenen smiley
         * @param {number} middeny - y-coördinaat van middelpunt van de tekenen smiley
         * @param {number} straal -  straal van de tekenen smiley
         * @returns {object} properties voornaam, familienaam, emailadres
         */
        tekenSmiley: function(canvas, middenx, middeny, straal, emotie){
            mijnTekenObject = canvas.getContext("2d");
            this.tekenGezicht(middenx,middeny,straal, emotie);
            this.tekenOgen(middenx,middeny,straal);
            this.tekenMond(middenx,middeny,straal, emotie);
        },
    }
}());
