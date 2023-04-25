<script setup>
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
Chart.defaults.color = '#fff';

import { onMounted, reactive, ref } from 'vue';

const URL = 'https://api.github.com/users/JRB-y/events/public';
const chartData = ref(null);
const chartOptions = reactive({
  // responsive: true,
  // maintainAspectRatio: false,
  scales: {
    labelRotation: 100,
    x: {
      grid: {
        color: '#1f9a5026',
      },
      ticks: { display: false  },
    },
    y: {
      grid: {
        color: '#1f9a5026',
      },
      ticks: { display: true } 
    },
  },
  // plugins: {
  //   legend: {
  //     display: false,
  //   }
  // }
});

function formatDataForChart(jsonArray) {
  let reposCommits = {};

  jsonArray.forEach((item) => {
    let repoName = item.repo.name;
    let numOfCommits = item.payload.commits?.length || 1;
    console.log('numOfCommits', numOfCommits);

    if (reposCommits[repoName]) {
      reposCommits[repoName] += numOfCommits;
    } else {
      reposCommits[repoName] = numOfCommits;
    }
  });

  let labels = Object.keys(reposCommits);
  let data = Object.values(reposCommits);

  return {
    labels: labels,
    datasets: [
      {
        label: 'Last Github Activities',
        data: data,
        backgroundColor: 'rgba(94, 213, 143, 1)',
        borderColor: 'rgba(94, 213, 143, 1)',
        borderWidth: 1
      },
    ],
  };
}


onMounted(async () => {
  const response = await(await fetch(URL)).json()
  chartData.value = formatDataForChart(response)
});

</script>
<template>
  <div class="chart-wrapper">
    <LineChart :chartData="chartData" aria-label="Github Last 30 activites" role="img" :options="chartOptions" height="70px"/>
  </div>
</template>

<style scoped>
.chart-wrapper {
  padding: 1em;
  color: rgb(3, 163, 69);
}
</style>