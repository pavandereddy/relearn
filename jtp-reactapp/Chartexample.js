import './App.css';
import React, { Component } from 'react'; 
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class Chartexample extends Component{  
  constructor(props) {
    super(props);
    this.options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'My chart'
      },
      series: [
        {
          data: [1, 2, 1, 4, 3, 6]
        }
      ]
    };
    this.config = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'World\'s largest cities per 2014'
      },
      subtitle: {
          text: 'Largest Cities'
      },
      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Population (millions)'
            }
          },
          legend: {
              enabled: false
          },
          tooltip: {
              pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
          },
          series: [{
              name: 'Population',
              data: [
                  ['Shanghai', 23.7],
                  ['Lagos', 16.1],
                  ['Istanbul', 14.2],
                  ['Karachi', 14.0],
                  ['Mumbai', 12.5],
                  ['Moscow', 12.1],
                  ['São Paulo', 11.8],
                  ['Beijing', 11.7],
                  ['Guangzhou', 11.1],
                  ['Delhi', 11.1],
                  ['Shenzhen', 10.5],

              ],
      
          }]
      };
      this.pieChart = {
        chart: {
          type: 'pie'
      },
      title: {
          text: 'Browser market shares in January, 2018'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: true
          }, {
              name: 'Internet Explorer',
              y: 11.84
          }, {
              name: 'Firefox',
              y: 10.85
          }, {
              name: 'Edge',
              y: 4.67
          }, {
              name: 'Safari',
              y: 4.18
          }, {
              name: 'Sogou Explorer',
              y: 1.64
          }, {
              name: 'Opera',
              y: 1.6
          }, {
              name: 'QQ',
              y: 1.2
          }, {
              name: 'Other',
              y: 2.61
          }]
      }]
      }
}

   render(){
  return ( 
<div>
  <HighchartsReact highcharts={Highcharts} options={this.options} />
  <HighchartsReact highcharts={Highcharts} options={this.config} />
  <HighchartsReact highcharts={Highcharts} options={this.pieChart} />
</div>
   );
}
}

export default Chartexample;

