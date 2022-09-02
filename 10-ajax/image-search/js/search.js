'use strict';

var searchFlickr = function searchFlickr(keywords) {
    console.log('Searching a secret site for', keywords);

    // get the data 
    var flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1 // please don't be bored enough to read up this
    }).done(showImages).done(function (response) {
        console.log(response);
    });
    // show the data
};

var showImages = function showImages(results) {
    _(results.photos.photo).each(function (photo) {
        // generate a thumbnail
        var thumbnail = generateURL(photo);
        var $img = $('<img>', { src: thumbnail });
        $('#images').append($img);
        // display the thumbnail
    });
};

var generateURL = function generateURL(p) {
    return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // change 'q' to something else for different sizes (see documentation)
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); // disable the form from being submitted to a server.
        var searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    $(window).on('scroll', function () {
        // calculate the scrollBottom (how close we are to the end of the document)
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        console.log(scrollBottom);
        // if (scrollBottom < 600)
        // searchFlickr again for more photos
        if (scrollBottom < 600) {
            var searchTerms = $('#query').val();
            searchFlickr(searchTerms);
        }
    });
});