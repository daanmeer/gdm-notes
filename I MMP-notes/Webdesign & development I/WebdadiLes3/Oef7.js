/********************************************************
* @author		Daan Meert
* @created    	03/03/2016
* @modified   	03/03/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/
function smileyTekenen(middenx, middeny, straal, keuze) {
	var canvas = document.getElementById("mijnCanvas");
	var background = canvas.getContext("2d");
	background.beginPath();
	background.arc((middenx/100)*112,(middeny/100)*112,straal,0,2*Math.PI);
	background.lineWidth=middenx/12;
	background.stroke();

	switch (keuze) {
    case -1:
		background.fillStyle="#A00";
		background.fill();
		background.stroke();
		var mouth = canvas.getContext("2d");
		mouth.beginPath();
		mouth.arc((middenx/100)*110,(middeny/100)*170,(straal/100)*45,600,2*Math.PI);
		mouth.lineWidth=straal/10;
		mouth.stroke();
        break;
    
    case 0:
		background.fillStyle="0A0";
		background.fill();
		background.stroke();
		var mouth = canvas.getContext("2d");
		mouth.beginPath();
		mouth.arc((middenx/100)*110,(middeny/100)*130,(straal/90)*40,0,Math.PI);
		mouth.lineWidth=straal/10;
		mouth.stroke();
        break;
    
    case 1:
		background.fillStyle="#AA0";
		background.fill();
		background.stroke();
		var mouth = canvas.getContext("2d");
		mouth.beginPath();
		mouth.moveTo((middenx/190)*110,(middeny/200)*300);
		mouth.lineTo((middenx/200)*330,(middeny/200)*300);
		mouth.lineWidth=straal/10;
		mouth.stroke();
        break;
    }
	var leftEye = canvas.getContext("2d");
	leftEye.beginPath();
	leftEye.arc((middenx/100)*73,(middeny/100)*77,(straal/90)*18,0,2*Math.PI);
	background.fillStyle="#000000";
	leftEye.fill();

	var rightEye = canvas.getContext("2d");
	rightEye.beginPath();
	rightEye.arc((middenx/100)*148,(middeny/100)*77,(straal/90)*18,0,2*Math.PI);
	rightEye.fill();
}

smileyTekenen(220, 220, 220, 0);

