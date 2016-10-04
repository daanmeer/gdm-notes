/********************************************************
* @author		Daan Meert
* @created    	18/02/2016
* @modified   	18/02/2016
* @copyright Copyright © 2015-2016 Artevelde University College Ghent * 
********************************************************/

var canvas = document.getElementById("mijnCanvas");
var leftEye = canvas.getContext("2d");
leftEye.beginPath();
leftEye.arc(60,60,20,0,2*Math.PI);
leftEye.fill();
var rightEye = canvas.getContext("2d");
rightEye.beginPath();
rightEye.arc(140,60,20,0,2*Math.PI);
rightEye.fill();
var mouth = canvas.getContext("2d");
mouth.beginPath();
mouth.arc(100,110,60,0,Math.PI);
mouth.stroke();