	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 *                                                                           *
	 *                                                                           *
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

	 Ann Audenaert en Pieter Vandaele
	 Copyright © 2015-2016 Artevelde University College Ghent


Web Design&Development I - Artezon.be
======================================
Deze webwinkel is een demoproject van de afstudeerrichting MMP.
Dit project wordt onder andere gebruikt voor het aanleren van Bootstrap, JavaScript, jQuery, de basis van PHP en MySQL
en geldt niet als praktijkvoorbeeld van hoe een webwinkel voor productie ontworpen moet worden.


index.html
----------
Op deze pagina mag noch de HTML, noch de CSS aangepast worden! Alle veranderingen gebeuren in het index.js bestand dat zich bevindt in de map js. 

### Werken met IFFE
1. Plaats alle code in een IFFE zodat deze wordt opgeroepen als de pagina wordt geladen in de browser

### Werken met variabelen
1. Declareer twee variabelen genaamd naam en voornaam.
2. Initialiseer deze variabelen met je eigen gegevens.
3. Vervang de algemene tekst in het heading-element h1 met id-waarde "greetingheader" door "Welkom" gevolgd door de waarden van de twee variabelen. (bv. Welkom Ann Audenaert!)

### Werken met objecten en DOM manipulatie
1. Vervang in de footer de tekst "Copyright &copy; 2014-2015" door "Copyright &copy; 2014-" en het huidig jaartal. Opgelet: je mag enkel dit stukje tekst manipuleren, niet de volledige inhoud van de paragraaf.
2. Voeg een nieuw artikel voor alle andere artikelen. De structuur en opmaak moet hetzelfde zijn als de andere artikels op de pagina.
    * Dit artikel gebruikt de gegevens van het object genaamd nieuwArtikel dat je kan terug vinden in het bestand index.js. Je bent verplicht om de gegevens van het nieuwe artikel in te vullen door het aanroepen van de properties van dit object.  

3. Op de pagina staan een aantal article-elementen. Deze elementen zouden een klasse moeten krijgen waarmee de achtergrondkleur van het element wordt ingesteld. 
    * In het index.js bestand staat er een array ‘kleuren’ gedeclareerd met de namen van de klassen.
    * De bedoeling is dat je de waarden uit deze array toevoegt als klasse-waarden bij de article-elementen.
    * Het eerste artikel krijgt de klasse blue, het 2e artikel de klasse purple, het 3e artikel de klasse green, … het 7e artikel opnieuw de klasse blue, …
    * Gebruik een for-lus om alle artikelen te overlopen.

register.html
-------------
Op deze pagina mag noch de HTML, noch de CSS aangepast worden! Alle veranderingen gebeuren in het register.js bestand gebeuren. 
- Deze pagina bevat een formulier om nieuwe gebruikers te registeren. 
- De gebruiker moet op deze pagina zich eerst aanmelden alvorens hij naar de rest van de site kan gaan. We vragen aan jou om het e-mailveld te valideren wanneer de gebruiker op de ‘Registreren’ knop klikt.

1. Schrijf een functie checkEmailadres met een argument genaamd ‘email’. De functie moet testen of het emailadres 
    - een @-teken bevat EN
    - er een string voor het @-teken staat. 
    - De functie moet een object teruggeven met twee properties:
        1. Een melding (string) die van toepassing is bij het e-mailadres
            a. ongeldig e-mailadres: geen @-teken aanwezig
            b. ongeldig e-mailadres: geen string voor het @-teken aanwezig
            c. geldig e-mailadres
        2. Een boolean die aangeeft of het e-mailadres geldig is of niet. 

2. Roep de functie op als de de gebruiker op de ‘Registreren’ knop klikt.
    - Indien de gebruiker geen geldig e-mailadres heeft ingevuld, dan moet in de console de melding die je terugkrijgt van de functie worden getoond en het e-mailveld moet een rode achtergrondkleur krijgen.
    - Indien de gebruiker een geldig e-mailadres heeft ingevuld, dan schrijf je enkel de melding die je terugkrijgt van de functie weg in de console. 

Veel succes!
