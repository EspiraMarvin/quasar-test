<template>
  <apexchart type="donut" height="211" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexDonut',
  data () {
    return {
      series: [41, 84, 15],
      chartOptions: {
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
        chart: {
          toolbar: {
            show: false
          }
        },
        title: {
          text: 'Donut',
          align: 'center',
          style: {
            color: '#FFF'
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
          labels: {
            colors: '#FFF'
          }
        }
      }
    }
  }
}
</script>
