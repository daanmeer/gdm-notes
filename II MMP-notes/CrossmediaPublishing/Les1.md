#Les 1


```
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>Lesweek 1</h1>
	<?php 
		//Mijn eerste php code
		//$name = 'world';
		$name = $_GET['name'];
		$number = $_GET['number'];
		$blokKleur = $_GET['blokKleur'];
		//$year = 2016;
		//$year++;
		if($name == "MMP" || $name == "mmp"){	
			echo "Hello ";
		}
		else {
			echo "Hi ";
		}
		echo $name . ' <br>';
		//echo (date("Y") + 1);
		$a = 0;
		$b = 1;
		$f = 1;
		echo $a . ' ' . $b . ' ' ;
		for ($a = 0; $a < 10; $a++){
			$f = $c + $b;
        	$c = $b;
       	 	$b = $f;
       	 	echo $b . ' ';
		}

	?>
	<h2>Academiejaar</h2>
	<?php 
			for($i = 0 ; $i < $number; $i++){
				echo "<div style='background-color: hsla(" . $i . ", 100%, 70%, 0.9);'>A</div> ";
			}
			function keuzeBlok($blokKleur) {
				echo "<div style='background-color: hsla(" . $blokKleur . ", 100%, 70%, 0.9);'>A</div> ";

			}
		keuzeBlok($blokKleur);

	?>
	<style type="text/css">
		* {
			margin: 0;
		}
		div {
			color: transparent;
			height: 9vw;
			width: 9vw;
			margin: 0.44vw;
			float: left;
		}
	</style>
</body>
</html>

