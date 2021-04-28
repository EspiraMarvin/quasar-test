<template>
  <div>
    <apexchart type="donut" :options="chartOptions" :series="series" class="flex flex-center" height="206" />
  </div>
</template>

<script>
export default {
  name: 'ApexDonut',
  data () {
    return {
      series: [41, 84, 15],
      chartOptions: {
        chart: {
          toolbar: {
            show: true
          }
        },
        colors: ['#FEB019', '#00E396', '#FF3D24'],
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1000
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.05,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        title: {
          text: 'Percentage Tasks',
          align: 'center',
          textAnchor: 'middle',
          style: {
            fontSize: '12px',
            fontWeight: 'normal',
            color: '#333333'
          }
        },
        labels: ['Active', 'Completed', 'Ended'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: -10,
          labels: {
            colors: '#888888'
          }
        }
      }
    }
  }
}
</script>
