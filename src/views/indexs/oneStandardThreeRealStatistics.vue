<template>
  <div>
    <Echart :options="options" height="300px"/>
  </div>
</template>

<script>
export default {
  name: "oneStandardThreeRealStatistics.vue",
  data() {
    return {
      options: {
        legend: {
          textStyle: {
            color: '#5692fd',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        xAxis: {

          type: 'category',
          data: ['实有人口' ,'实有建筑物', '实有房屋' ,'实有单位'],
          axisLabel: {
            fontSize: 10,
            color: '#5692fd',
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: '采集量',
            type: 'line',
            data: [542,48,69,58,],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true,
            },

            itemStyle: {
              color: '#5692fd',
            },
          },
          {
            name: '更新量',
            type: 'line',
            data: [147,485,123,154,],
            itemStyle: {
              color: '#f8a714',
            },
          },
          {
            name: '走访量',
            type: 'line',
            data: [48,158,254,51,],
            itemStyle: {
              color: '#072365',
            },
          },

        ],


      },
      legend: {
        show: true
      },
    }
  },
  mounted() {
    // console.log(xzqCode);

  },
  methods: {


  }
}
</script>
<style lang="scss">
.echarts_bottom {
  width: 100%;
  height: 100%;
}
</style>
