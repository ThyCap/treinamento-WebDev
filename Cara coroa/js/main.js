// const Chart = require('chart.js');

let statsY1 = [];
let statsY2 = [];
let statsX = [];

const clicksObj = document.getElementById('clicks');
const headsObj = document.getElementById('heads');
const tailsObj = document.getElementById('tails');
const chipsObj = document.getElementById('chips');
const resultObj = document.getElementById('result');
const button1Obj = document.getElementById('button1');
const button2Obj = document.getElementById('button2');
const changeObj = document.getElementById('change');

function showGraph() {
  const myChart = document.getElementById('myChart').getContext('2d');

  // eslint-disable-next-line no-undef
  const statChart = new Chart(myChart, {
    type: 'line',
    data: {
      labels: statsX,
      datasets: [
        {
          lineTension: 0,
          borderColor: 'rgb(131,197,217)',
          data: statsY1,
          pointRadius: 1,
          backgroundColor: 'rgb(131,197,217,0.1)',
          label: 'Cara (%)',
        },
        {
          lineTension: 0,
          borderColor: 'rgb(255, 71, 71)',
          data: statsY2,
          pointRadius: 1,
          backgroundColor: 'rgb(255, 71, 71,0.1)',
          label: 'Dinheiro restante (R$)',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        fontFamily: "'Lucida Console', Monaco, monospace",
        text: 'Análise de eventos Cara e dinheiro restante por rodada',
        fontSize: 20,
      },
      animation: false,
      legend: {
        display: true,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              display: true,
              min: 0,
              max: 100,
            },
            scaleLabel: {
              display: true,
              labelString: 'Incidência de Caras (%)',
            },
          },
        ],
        XAxes: [
          {
            ticks: {
              display: true,
            },
            scaleLabel: {
              display: true,
              labelString: 'Numero de rodadas',
            },
          },
        ],
      },
    },
  });
}

function clickButton(bet) {
  if (button1Obj.disabled === false) {
    clicksObj.innerHTML = Number(clicksObj.innerHTML) + 1;

    const randNum = Math.floor(Math.random() * 100);
    if (randNum % 2 === 0) {
      headsObj.innerHTML = Number(headsObj.innerHTML) + 1;
      resultObj.innerHTML = 'Cara!';
      headsObj.innerHTML = Number(headsObj.innerHTML);
      if (bet === 'headBet') {
        chipsObj.innerHTML = Number(chipsObj.innerHTML) + 1;
        changeObj.innerHTML = '(+1)';
        changeObj.style.color = 'green';
      } else {
        chipsObj.innerHTML = Number(chipsObj.innerHTML) - 1;
        changeObj.innerHTML = '(-1)';
        changeObj.style.color = 'red';

        if (Number(chipsObj.innerHTML) <= 0) {
          resultObj.innerHTML = `Você perdeu! Você sobreviveu a ${clicksObj.innerHTML} rodadas.`;
          button1Obj.disabled = true;
          button2Obj.disabled = true;
        }
      }
      chipsObj.innerHTML = Number(chipsObj.innerHTML);
    } else {
      tailsObj.innerHTML = Number(tailsObj.innerHTML) + 1;
      resultObj.innerHTML = 'Coroa!';
      tailsObj.innerHTML = Number(tailsObj.innerHTML);
      if (bet === 'tailBet') {
        chipsObj.innerHTML = Number(chipsObj.innerHTML) + 1;
        changeObj.innerHTML = '(+1)';
        changeObj.style.color = 'green';
      } else {
        chipsObj.innerHTML = Number(chipsObj.innerHTML) - 1;
        changeObj.innerHTML = '(-1)';
        changeObj.style.color = 'red';

        if (Number(chipsObj.innerHTML) <= 0) {
          resultObj.innerHTML = `Você perdeu! Você sobreviveu a ${clicksObj.innerHTML} rodadas.`;
          button1Obj.disabled = true;
          button2Obj.disabled = true;
        }
      }
      chipsObj.innerHTML = Number(chipsObj.innerHTML);
    }
    statsX.push(Number(clicksObj.innerHTML));
    statsY1.push(
      (Number(headsObj.innerHTML) / Number(clicksObj.innerHTML)) * 100
    );
    statsY2.push(Number(chipsObj.innerHTML));
    showGraph();
  }
}

function reset() {
  clicksObj.innerHTML = 0;
  headsObj.innerHTML = 0;
  tailsObj.innerHTML = 0;
  chipsObj.innerHTML = 10;
  resultObj.innerHTML = `Resetado.`;
  changeObj.innerHTML = '';
  button1Obj.disabled = false;
  button2Obj.disabled = false;
  statsX = [];
  statsY1 = [];
  statsY2 = [];
  showGraph();
}

document.onkeyup = function (e) {
  if (e.which === 65) {
    clickButton('headBet');
  } else if (e.which === 83) {
    clickButton('tailBet');
  } else if (e.which === 82) {
    reset();
  }
};

window.onload = showGraph;
