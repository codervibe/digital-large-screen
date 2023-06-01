<template>
  <div><Echart :options="options" height="300px" /></div>
</template>

<script>
export default {
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
        yAxis: {
          type: 'category',
          data: ['存证文件', '存证报告'],
          axisLabel: {
            fontSize: 10,
            color: '#5692fd',
          },
        },
        series: [
          {
            name: '本月',
            type: 'bar',
            data: [360, 230],
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
            name: '今年',
            type: 'bar',
            data: [420, 360],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true,
            },
            itemStyle: {
              color: '#8dfdae',
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
.echarts_bottom {
  width: 100%;
  height: 100%;
}
</style>
