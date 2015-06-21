//Function to load images into the page so that Hardcore mode can be tested.	
var imagify = function(){
	var body = $('body'),
		header =$('#header');
	
	//Set the body image properties
	body.css('background-image', 'url("images/blue.jpg")');
	body.css('background-size', 'contain');
	
	header.css('background-color', '#FFFFFF');
	$('.panel').css('background-image', 'url("images/orange.jpg")');
};