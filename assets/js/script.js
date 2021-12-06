const apiKey = "4a16c12ca74f78075969c8be71da2e05";

const $ = (e) => document.querySelector(e);
const $s = (e) => document.querySelectorAll(e);

$('#buscar').addEventListener('click', () => {

    let music = $('.lyrics').value;
    let artist = $('.artist').value;

    fetchLyrics(music, artist);
})

// function getApi(artist, music) {
//     let url = `https://api.vagalume.com.br/search.php?art=${artist}&mus=${music}&apikey={${apiKey}}`

//     console.log(url)

//     fetch(url)
//         .then(jBody => jBody.json())
//         .then(json => {
//             $('.titleEN').innerHTML = json.mus[0].name;
//             $('.lyricEN').innerHTML = json.mus[0].text;
//             $('.titlePT').innerHTML = json.mus[0].name;
//             $('.lyricPT').innerHTML = json.mus[0].translate[0].text;
//         })

// }

async function fetchLyrics(music, artist) {
    const response = await fetch(`https://api.vagalume.com.br/search.php?art=${artist}&mus=${music}&apikey={${apiKey}}`);
    const jsonBody = await response.json();
    showData(jsonBody);
    console.log(jsonBody);
}

function showData(jsonBody) {
    $('.titleEN').innerHTML = jsonBody.mus[0].name;
    $('.lyricEN').innerHTML = jsonBody.mus[0].text;
    $('.titlePT').innerHTML = jsonBody.mus[0].name;
    $('.lyricPT').innerHTML = jsonBody.mus[0].translate[0].text;
}
