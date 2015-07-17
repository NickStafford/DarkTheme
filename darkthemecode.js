//TODOs:
//	1. Write the script tag pulling in tinycolor in js.

//Function to perform the DarkTheme operation
var craigify = function() {
	$('*').each(function() {
		var descentLevel = $(this).parents().length;
		descentLevel *= 15;
		
		var color = 'rgb(' + descentLevel + ',' + descentLevel + ',' + descentLevel + ')';
		
		if($(this).css('background-color') != 'transparent'
			) {
			$(this).css('background-color', color);
		}
		$(this).css('border-color','black');
		$(this).css('border-style', 'sold');
		$(this).css('border-weight', '20px');
		$(this).css('color', 'white');
	});
};

var greyscale = function () {
	$('*').each(function() {
		if($(this).css('background-color') != 'transparent' &&
			$(this).css('background-color') != undefined) {
			//Create a tinycolor object of the current element
			var color = new tinycolor($(this).css('background-color'))
			
			//Greyscale color
			color = color.greyscale();
			
			//push the greyscale color back to the element
			$(this).css('background-color', color.toString());
		}
	});
};

//Function to take in a JQUERY object and greyscale it.
var greyscaleElement = function(element)
{
			if($(element).css('background-color') != 'transparent' &&
			$(this).css('background-color') != undefined) {
			//Create a tinycolor object of the current element
			var color = new tinycolor($(this).css('background-color'))
			
			//Greyscale color
			color = color.greyscale();
			
			//push the greyscale color back to the element
			$(this).css('background-color', color.toString());
		}
};