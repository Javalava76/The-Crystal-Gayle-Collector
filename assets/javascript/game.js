$(document).ready(function() {
   
	// declare variables
    var totalWins = 0;
	var totalLosses = 0;
	var targetNumber = 0; 
    var currentScore = 0;
    var crystalValue = 0;
    var imageCrystal;
   

    // load crystal images with the following "for" loop

	for (var i = 0; i < 4; i++ ) {

		// each iteration assigned an image to imageCrystal
		imageCrystal = $("<img>");

		// each crystal assigned a class to connect it to CSS
		imageCrystal.addClass("crystal-image"+i);

		// "alt" tag assigned like in a link when image can't load
		imageCrystal.attr("alt","Crystal"+i);

		// assigns imageCrystal a .jpg by based on corresponding iteration/number
		imageCrystal.attr("src","./assets/images/crystal_images/crystal_"+i+".jpg");

		// // calls function to get data value for the crystal image
		// crystalValue[i] = randomNumberFromRange(1,12);

		// imageCrystal.attr("data-crystalvalue",crystalValue[i]);

		$("#crystals").append(imageCrystal);	
	}

	reset();

    function reset(){

		targetNumber = randomNumberFromRange(19,120);

		currentScore = 0;

	    $("#numberToGuess").text(targetNumber);
	    $("#updatingNumber").text(currentScore);


		randomCrystalValues();	    

    }
    
    function randomNumberFromRange(min,max)
	{
    	return Math.floor(Math.random()*(max-min+1)+min);
    	console.log(randomNumberFromRange);
	}


	function randomCrystalValues(){

		for(var i=0; i<4; i++){

			console.log(i);

			crystalValue = randomNumberFromRange(1,12);
			$(".crystal-image"+i).attr("data-value",crystalValue);

			
		}

	}

	

	$('img[class^="crystal-image"]').on("click",function(evt){

		var crystalValue = $(this).attr("data-value");
		console.log(crystalValue);

		currentScore = currentScore+Number(crystalValue);
		console.log(currentScore);

		$("#updatingNumber").text(currentScore);

		if (targetNumber === currentScore) {
			alert('You win!');
			totalWins++;
			$('#wins').text(totalWins);
			reset();
		} 
		else if (currentScore > targetNumber) {
			alert('You lose!');	
			totalLosses++;
			$('#losses').text(totalLosses);
			reset();
		}	

	});
	
});