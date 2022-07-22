/*
document.body.style.fontFamily = 'Arial, sans-serif';

const spans = document.getElementsByTagName('span');
spans[0].innerHTML = 'poopy scoopy';
spans[1].innerHTML = 'poop';
document.getElementById('hometown').innerHTML = 'Sydney';

const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.className = 'listitem';    
}

const img = document.createElement('img'); // detached DOM node
img.src = 'http://www.fillmurray.com/50/50';
document.body.appendChild(img);
*/

const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];

const $ul = $('<ul></ul>'); // detached jQuery object

for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const $li = $(`<li>${book.title} by ${book.author}</li>`)

    if (book.alreadyRead) {
        li.className = 'alreadyread'; // will replace existing class
        $li.addClass('alreadyread'); // adds an additional class
    }

    $ul.append($li);

};

$ul.appendtTo('body');
