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
 * @author     Meert Daan
 * @created	   dd/mm/jjjj 
 * @modified   dd/mm/jjjj
 * @copyright  Copyright © 2015-2016 Artevelde University College Ghent
 * @function   beschrijf wat het script doet
 * TODO: examenoefening
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    //gebaseerd op de code gebruikt in example.html van C07
    // SETUP: caching elementen in variabelen

//todo 11: mijn script is nu in een iffy geplaatst en door $(document).ready(function(){ zorg ik ervoor dat mijn script pas zal werken als de pagina geladen is 
(function(){
    $(document).ready(function(){ 
        //todo 14: door de volgende code zet ik het winkelmandje op nul
        $("i.glyphicon-remove").replaceWith("0");
        //todo 12: door volgend stukje code vervang ik de tekst in mijn naam 
        $("#greetingheader").text("Welkom Daan Meert!")      
        var $list, $buttons;
        var item = "";                                 // item is an empty string
        $list = $("ul.dropdown-menu");                 // Cache the unordered list
        $buttons = $("article.product button.btn");            // Cache the buttons
        //extra: maak winkelmandje leeg bij het laden van de pagina
        $("#greetingheader").text("Welkom Meert Daan !");
        $("#footer p").html($("#footer p").html().replace("2015",(new Date).getFullYear()));
        //todo 15: het nieuw artikel bovenaanzetten doe ik door een te clonen en dan doormiddel vna first-child de waarden aan te passen.
        $('.row').prepend($('article:first-child').clone());
        $('article:first-child h1').text("Titel: Slow-Bowl");
        $('article:first-child div').html('<i class="glyphicon glyphicon-euro"></i> 24,99');
        $('article:first-child p').text("Dogs live relatively simple lives. They look forward to: walks, playing, petting, sleeping, and eating. Like Caesar says, dogs live in the moment, which means they can view each and every meal like it is their first and their last.");
        $('article:first-child img').attr("src", "images/185b_slo_bowl.jpg");


        //todo 13: door middel van de attribute te veranderen
        $("span a").first().attr("href","login.html");
        

        // ITEM COUNTER: aantal producten tonen rechts bovenaan
        function updateCount() {                       // Create function to update counter
            var items = $("i.glyphicon-remove").length; // Number of items in list
            $(".badge").text(items);                   // Added into counter circle
        }
        updateCount();                                 // Call the function
        //todo 16: doe je door van append prepend te make
        // ADDING A NEW LIST ITEM: wanneer op een knop geklikt wordt van een prtoduct
        $buttons.on('click', function(e) {         // When a button is clicked
            e.preventDefault();                         // Prevent form being submitted
            var text = $(this).parent().find("h1").text();                 // Get value of text input
            $list.prepend('<li><a href="#"><i class="pull-right glyphicon glyphicon-remove"></i> ' + text + '</a></li>'); //Add item to end of the list
            updateCount();                              // Update the count
        });

        // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT: verwijderen van een product uit de lijst
        $list.on('click', 'i', function() {
            $(this).parent().parent().remove();                  // Remove the list item
            updateCount();                   // Update the counter
        });                                  // End of event handler
    });
}())
