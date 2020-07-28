import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

function UnitPieGraph(props) {
  const { stats } = props;
  const names = {
    inUse: 'Em Uso',
    available: 'Disponível',
    underMaintenance: 'Em Manutenção',
    onAlert: 'Em Alerta',
  };

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: 250,
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    title: {
      text: 'Ativos por Status',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}',
        },
      },
    },
    series: [
      {
        name: 'Ativos',
        colorByPoint: true,
        data: [],
      },
    ],
  };

  for (let key in names) {
    options.series[0].data.push({
      name: names[key],
      y: stats[key],
    });
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default UnitPieGraph;
