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
    var $list, $buttons;
    var item = "";                                 // item is an empty string
    $list = $("ul.dropdown-menu");                 // Cache the unordered list
    $buttons = $("article.product button.btn");            // Cache the buttons
    //extra: maak winkelmandje leeg bij het laden van de pagina

    // ITEM COUNTER: aantal producten tonen rechts bovenaan
    function updateCount() {                       // Create function to update counter
        var items = $("i.glyphicon-remove").length; // Number of items in list
        $(".badge").text(items);                   // Added into counter circle
    }
    updateCount();                                 // Call the function

    // ADDING A NEW LIST ITEM: wanneer op een knop geklikt wordt van een prtoduct
    $buttons.on('click', function(e) {         // When a button is clicked
        e.preventDefault();                         // Prevent form being submitted
        var text = $(this).parent().find("h1").text();                 // Get value of text input
        $list.append('<li><a href="#"><i class="pull-right glyphicon glyphicon-remove"></i> ' + text + '</a></li>'); //Add item to end of the list
        updateCount();                              // Update the count
    });

    // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT: verwijderen van een product uit de lijst
    $list.on('click', 'i', function() {
        $(this).parent().parent().remove();                  // Remove the list item
        updateCount();                   // Update the counter
    });                                  // End of event handler
