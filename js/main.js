function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName; 
	console.log(fullName);

	if (firstName.toLowerCase() == 'General' &&
		lastName.toLowerCase() != 'Assembly') {
		console.log('Greetings, General!');
	} 

	var age = prompt('How old are you?');
	age = parseInt(age)

	// if it is true, it will run the curly bracket instruction.
	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	var favColour = prompt('What is your favourite colour?');
	favColour = favColour.toLowerCase();

	if (favColour == 'red' ||
		favColour == 'green' ||
		favColour == 'blue' ||
		favColour == 'white' ||
		favColour == 'yellow') {
		$('h1').css('color', favColour);
	}
}

// When the page has loaded
$(function() {
	
	//when the user clicks the img, run askQuestions
	$('img').on('click', askQuestions);

	// When the user clicks an h3 element
	$('h3').on('click', function() {

		// Toggle the next section
		$(this).next().slideToggle(1500);

	});

});