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