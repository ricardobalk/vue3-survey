<script lang="ts">
import { defineComponent, inject, computed } from 'vue'
import ApexChart from 'vue3-apexcharts';

export default defineComponent({
  components: { ApexChart },
  setup() {
    const questionResponses = inject('questionResponses');

    const xAxis = computed(() =>
      Object.keys(questionResponses)
    );

    const yAxis = computed(() =>
      Object.values(questionResponses)
    );

    const chartOptions = {
      chart: {
        type: 'radar',
      },
      title: {
        text: 'Resultaten QuickScan'
      },
      fill: {
        opacity: 0.5,
        colors: ['#ec6826']
      },
      stroke: {
        colors: ['#ec6826']
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: '#2c3e50',
            connectorColors: '#bbb',
            fill: {
              colors: ['#fefefe']
            }
          }
        }
      },
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#ec6826',
        strokeWidth: 2,
      },
      xaxis: {
        categories: xAxis.value,
        labels: {
          style: {
            colors: ['#333', '#333', '#333', '#333', '#333', '#333', '#333', '#333']
          }
        }
      },
      yaxis: {
        min: 0,
        max: 3,
        forceNiceScale: true,
      }
    }

    const chartData = computed(() => {
      return [
        {
          name: "Score",
          data: yAxis.value,
        },
      ]
    });

    return { chartOptions, chartData };
  },
})
</script>

<template>
  <section class="results">
    <div class="graph">
      <ApexChart width="600" :options="chartOptions" :series="chartData" />
    </div>
  </section>
</template>