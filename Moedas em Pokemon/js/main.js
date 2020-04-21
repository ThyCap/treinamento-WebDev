const endpoint = "http://data.fixer.io/api/latest?access_key=0192cba9480a1b66d2e4a65ea4691d7e"
const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=800"

function convert(){
    fetch(endpoint)
    .then(response => response.json())
    .then(date => {
        const euroToReal   = date.rates.BRL;
        const euroToDollar = date.rates.USD;
        const euroToPound  = date.rates.GBP;

        euroRate   = euroToReal.toFixed(2);
        dollarRate = (euroToReal/euroToDollar).toFixed(2);
        poundRate  = (euroToReal/euroToPound).toFixed(2);

        document.getElementById('euroRate').innerHTML   = euroRate;
        document.getElementById('dollarRate').innerHTML = dollarRate;
        document.getElementById('poundRate').innerHTML  = poundRate;

        document.getElementById('dollarImage').src = `https://pokeres.bastionbot.org/images/pokemon/${dollarRate*100}.png`
        document.getElementById('euroImage').src   = `https://pokeres.bastionbot.org/images/pokemon/${euroRate*100}.png`
        document.getElementById('poundImage').src  = `https://pokeres.bastionbot.org/images/pokemon/${poundRate*100}.png`

        document.getElementById('dollarId').innerHTML = `#${dollarRate*100}:`
        document.getElementById('euroId').innerHTML   = `#${euroRate*100}:`
        document.getElementById('poundId').innerHTML  = `#${poundRate*100}:`

        fetch(pokeUrl)
        .then(response => response.json())
        .then(allpokemon => {
            document.getElementById('dollarName').innerHTML = capitalize(allpokemon.results[dollarRate*100].name);
            document.getElementById('euroName').innerHTML   = capitalize(allpokemon.results[euroRate*100].name);
            document.getElementById('poundName').innerHTML  = capitalize(allpokemon.results[poundRate*100].name);
        })
    
        let a = new Date(date.timestamp * 1000);
        document.getElementById('timestamp').innerHTML = a.toGMTString();
    });
}

function capitalize (str) {
    return str[0].toUpperCase() + str.slice(1);
}

setTimeout(convert,10)
setInterval(convert,1800000)