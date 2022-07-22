const makeMadLib = function () {
    // const noun = document.getElementById('noun').value;
    // const adjective = document.getElementById('adjective').value;

    const noun = $('#noun').val(); // string
    const adjective = $('#adjective').val();
    const person = $('#person').val();

    const story = `${person} really likes ${adjective} ${noun}`;
    $('#story').prepend(`<p>${story}</p>`);
}

// const button = document.getElementById('lib-button');
// button.addEventListener('click', makeMadLib);

$('#lib-button').on('click', makeMadLib);