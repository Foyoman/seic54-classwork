$(document).ready(function() {
// const $links = $('a');

// for (let i = 0; i < $links.length; i++) {
//     const link = $links[i]; // retrieve the vanilla DOM node
//     const $link = $(link); // turn the DOM node back into a jQuery object

//     const href = $link.attr('href'); // getter
//     const thumbnailURL = youtube.generateThumbnailUrl(href);

//     const $image = $('<img>'); //detached jQuery object
//     $image.attr('src', thumbnailURL); // setter

//     $link.prepend($image); // TODO: make this better
// };

// Goals: Aim for this level
$('a').each(function () {
    const href = $(this).attr('href'); // 'this' current <a>
    const thumbnailURL = youtube.generateThumbnailUrl(href);
    $('<img>').attr('src', thumbnailURL).prependTo(this); // chaining
});

$('a').one('click', function(event) {
    event.preventDefault();
    const href = $(this).attr('href');
    const embed = youtube.generateEmbedUrl(href);
    $('<embed>').attr('src', embed).appendTo(this);
});

$('h1').funText(200, 'candy');
$('a').funText(100, 'reverseCandy');
});