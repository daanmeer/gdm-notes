/********************************************************
* @author		Daan Meert
* @created    	18/02/2016
* @modified   	18/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
function smileyTekenen(middenx, middeny, straal) {
	var canvas = document.getElementById("mijnCanvas");
	var background = canvas.getContext("2d");
	background.beginPath();
	background.arc(middenx,middeny,straal,0,2*Math.PI);
	background.fillStyle="#00AA00";
	background.fill();
	background.lineWidth=middenx/10;
	background.stroke();

	var leftEye = canvas.getContext("2d");
	leftEye.beginPath();
	leftEye.arc((middenx/100)*63,(middeny/100)*67,(straal/100)*18,0,2*Math.PI);
	background.fillStyle="#000000";
	leftEye.fill();

	var rightEye = canvas.getContext("2d");
	rightEye.beginPath();
	rightEye.arc((middenx/100)*138,(middeny/100)*67,(straal/100)*18,0,2*Math.PI);
	rightEye.fill();

	var mouth = canvas.getContext("2d");
	mouth.beginPath();
	mouth.arc((middenx/100)*100,(middeny/100)*120,(straal/100)*45,0,Math.PI);
	mouth.lineWidth=straal/10;
	mouth.stroke();
}
smileyTekenen(200, 200, 180);