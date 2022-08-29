$(document).ready(function () {
	const message = "this is the message"; // this variable persists in a closure

	$('button').on('click', function () {
		$('p').text(message);
	});

});