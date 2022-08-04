console.log('poop')


const fetchFact = function () {
    const xhr = new XMLHttpRequest(); // similar to HTTParty

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
        return; // The data is not ready yet.
        }    

        console.log( xhr.responseText ); // STRING
        const data = JSON.parse(xhr.responseText);
        console.log( data ); // an OBJECT

        const p = document.createElement('p');
        p.innerHTML = data.text;
        document.body.appendChild(p);
        };

        xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
        xhr.send(); // ASYNCHRONOUS
};

document.getElementById('fetch').addEventListener('click', fetchFact);
// $("#fetch").click(fetchFact);
fetchFact(); // First fact free