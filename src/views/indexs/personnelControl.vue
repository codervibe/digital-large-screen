<template>
  <div>
    <Echart :options="options" height="300px"/>
  </div>
</template>

<script>
export default {
  name: "personnelControl.vue",
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
          data: [178, 256, 75, 416, 389, 85],
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
            type: 'bar',
            data: [478, 156, 345, 216, 36, 85],
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
            type: 'bar',
            data: [178, 156, 345, 76, 89, 545],
            itemStyle: {
              color: '#f8a714',
            },
          },
          {
            name: '走访量',
            type: 'bar',
            data: [178, 156, 445, 416, 189, 645],
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
