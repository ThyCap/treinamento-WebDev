let req = "https://api-ssl.bitly.com/v4/shorten";

let token = "484631889a2b698f18be990d7f8eaf6ee0a37805";

const hamb  = document.getElementById('hamburger');
const menu  = document.getElementById('menu');
const login = document.getElementById('login');
const flex  = document.getElementById('flex');
const link = document.getElementById('link');
const shortened = document.getElementById('shortened');
const container_shortened = document.getElementById('container__shortened');

function menuShow() {
      hamburger.classList.toggle('show');
      menu.classList.toggle('show');
      login.classList.toggle('show');
      flex.classList.toggle('show');
}

function shorten() {
    container_shortened.style.display = 'flex';
    container_shortened.style.display.justifyContent = 'space-evenly';
    container_shortened.style.display.flexDirection = "column";
    //shortened.innerHTML = link.value;

    $encodedTrackedURL = encodeURIComponent(link.value);
    var params = {
        "access_token": token,
        "domain": 'bit.ly',
        "long_url": $encodedTrackedURL,
        "format": 'json'
    };
    
    //$.getJSON

    console.log('https://api-ssl.bitly.com/v4/shorten', params, function (response, status_txt) {
        $('#displayURL').text(status_txt + ' ' + response.data.url);
    });
    
}
