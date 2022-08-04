console.log('poop')

// define fetchCover
const fetchCover = function (bookTitle) {
    // get xhr
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + bookTitle);
    xhr.send(); // asynchronous
    // attach onreadystatechange
    xhr.onreadystatechange = function () {
        // return if not ready
        if (xhr.readyState !== 4) return;
        const data = JSON.parse(xhr.responseText);

        // get the cover
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        // display the cover
        document.getElementById('cover').src = cover
    };
};

// select the button
// attach an event listener
document.getElementById('search').addEventListener('submit', function (event) {
    event.preventDefault(); // DON'T GO ANYWHERE
    // get the title
    const title = document.getElementById('title').value
    // call fetchCover
    fetchCover(title);
});
