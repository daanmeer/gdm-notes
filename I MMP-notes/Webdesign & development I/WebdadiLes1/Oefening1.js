/********************************************************
* @author		Daan Meert
* @created    	18/02/2016
* @modified   	18/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/

var price; 
var quantity;
var total;

price = 7;
quantity = 12;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '€' + total;