let statsY = []
let statsX = []

function clickButton(bet) {
    clicks = Number(document.getElementById("clicks").innerHTML);
    heads = Number(document.getElementById("heads").innerHTML);
    tails = Number(document.getElementById("tails").innerHTML);
    chips = Number(document.getElementById("chips").innerHTML);
    
    if (chips <= 0) {
        document.getElementById("result").innerHTML = `Você perdeu! Você sobreviveu a ${clicks} rodadas.`;
        document.getElementById("Button1").disabled = true;
        document.getElementById("Button2").disabled = true;
    }
   
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;

    randNum = Math.floor(Math.random()*100);
    if (randNum%2 === 0) {
        heads +=1;
        document.getElementById("result").innerHTML = "Cara!";
        document.getElementById("heads").innerHTML = heads;
        if (bet === 'headBet') {
            chips += 1;
            document.getElementById("change").innerHTML = "(+1)";
            document.getElementById("change").style.color ="green";
        } else {
            chips -= 1;
            document.getElementById("change").innerHTML = "(-1)";
            document.getElementById("change").style.color ="red";
        }
        document.getElementById("chips").innerHTML = chips;
    } else {
        tails +=1;
        document.getElementById("result").innerHTML = "Coroa!";
        document.getElementById("tails").innerHTML = tails;
        if (bet === 'tailBet') {
            chips += 1;
            document.getElementById("change").innerHTML = "(+1)";
            document.getElementById("change").style.color ="green";
        } else {
            chips -= 1;
            document.getElementById("change").innerHTML = "(-1)";
            document.getElementById("change").style.color ="red";
        }
        document.getElementById("chips").innerHTML = chips;
    }
    statsX.push(clicks);
    statsY.push(heads/clicks*100);
    if (boolGraph){
        showGraph();
    }
};

function reset() {
    document.getElementById("clicks").innerHTML = 0;
    document.getElementById("heads").innerHTML = 0;
    document.getElementById("tails").innerHTML = 0;
    document.getElementById("chips").innerHTML = 10;
    document.getElementById("result").innerHTML = `Resetado.`;
    document.getElementById("change").innerHTML = "";
    statsX = [];
    statsY= [];
    showGraph();
}

let boolGraph = false;
function checkboxGraph() {
    if (boolGraph === true) {
        boolGraph = false;
        document.getElementById('showGraph').checked = false;
    } else {
        boolGraph = true;
        document.getElementById('showGraph').checked = true;
        showGraph();
    }
}

function showGraph() {
    let myChart = document.getElementById('myChart').getContext('2d');

    let statChart = new Chart(myChart, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: statsX,
            datasets: [{
                lineTension:0,
                fill: true,
                borderColor: 'rgb(131,197,217)',
                data: statsY,
                pointRadius: 1,
                backgroundColor: 'rgb(131,197,217,0.1)'
            }]
        },

        // Configuration options go here
        options: {
            title :{
                display: true,
                fontFamily: "'Lucida Console', Monaco, monospace",
                text: "Incidência de eventos cara por rodada"
            },
            animation: false,
            legend:{
                display:false
            },
            scales: {
                yAxes: [{
                    ticks:{
                        display: true,
                        min:0,
                        max:100
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Incidência de Caras (%)'
                    }
                }],
                XAxes: [{
                    ticks:{
                        display: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Numero de rodadas'
                    }
                }]
            }
        }
    })
}


document.onkeyup = function(e) {
    if (e.which === 65) {
        clickButton('headBet');
    }
    else if (e.which === 83) {
        clickButton('tailBet');
    }
    else if (e.which === 82) {
        reset();
    }
    else if (e.which === 71) {
        checkboxGraph();
    }
}