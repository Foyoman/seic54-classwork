$(document).ready(function () {
	$('#add-color').on('click', () => {
		// get the color
		const color = $('#color').val();
		// create a swatch in that color
		const $swatch = $('<div />').addClass('swatch').css('background-color', color);
		// put the swatch in the palette
		$swatch.appendTo('.palette'); // $('.palette').append($swatch)
	});

	// This won't work!
	// console.log( $('.swatch').length ); // 0
	// $('.swatch').on('click', function () {
	// 	$(this).addClass('selected');
	// });

	// Event delegation: listen for events on future DOM elements
	$('.palette').on('click', '.swatch', function () {
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
	});

	// Event delegation: listen for events on the parent FOR EFFICIENCY
	$('.canvas').on('mouseover', '.pixel', function (event) {
		if (event.shiftKey === false) return;
		// get the current selected color
		const color = $('.swatch.selected').css('background-color');
		// paint the current pixel (this) with that color
		$(this).css('background-color', color);
	});
});