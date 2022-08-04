console.log('poop')

const fetchCover = function (bookTitle) {
    $.ajax('https://www.googleapis.com/books/v1/volumes?q=title:', bookTitle).done(function (data) {
        console.log('request finished');
        console.log(data)

        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        $('#cover').attr('src', cover);
    });
};

$('#search').on('submit', function (event) {
    event.preventDefault();

    const title = $('#title').val();
    fetchCover(title);
});

// @cover = info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]
// authors = info["items"][1]["volumeInfo"]["authors"]
// @authors = authors[0] if authors.size == 1
// @authors = authors.join(', ') if authors.size > 1 
// @description = info["items"][1]["volumeInfo"]["description"]
// @title = info["items"][1]["volumeInfo"]["title"]