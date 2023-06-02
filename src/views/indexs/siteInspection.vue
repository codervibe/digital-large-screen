<template>
  <div>
    <Echart :options="options" height="300px"/>
  </div>
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
          data: [],
          axisLabel: {
            fontSize: 10,
            color: '#5692fd',
          },
        },
        series: [
          {
            name: '采集量',
            type: 'bar',
            data: [],
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
            data: [],
            itemStyle: {
              color: '#f8a714',
            },
          },
          {
            name: '走访量',
            type: 'bar',
            data: [],
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
    this.getCollector()
    this.getCollectionOfVisits()
    this.getUpdateOfVisits()
    this.getVolumeOfVisits()
  },
  methods: {
    //获取采集人员
    getCollector() {
      const url = 'http://rap2api.taobao.org/app/mock/312225/getCollector';
      this.$http.get(url).then(resp => {
        // console.log(resp)
        this.options.yAxis.data = resp.collectionList;
      })
    },
    //获取采集量
    getCollectionOfVisits() {
      const url = 'http://rap2api.taobao.org/app/mock/312225/getCollectionOVisits';
      this.$http.get(url).then(resp => {
        console.log(this.options.series[0].name)
        console.log(this.options.series[0].data)
        console.log(resp.data)
        if (this.options.series[0].name == '采集量') {
          this.options.series[0].data = resp.data
        }
      })
    },
    //获取更新量
    getUpdateOfVisits() {
      const url = 'http://rap2api.taobao.org/app/mock/312225/getUpdateOfVisits';
      this.$http.get(url).then(resp => {
        console.log(this.options.series[1].name)
        console.log(this.options.series[1].data)
        console.log(resp.data)
        if (this.options.series[1].name == '更新量') {
          this.options.series[1].data = resp.data
        }

      })
    },
    //获取走访量
    getVolumeOfVisits() {
      const url = 'http://rap2api.taobao.org/app/mock/312225/getVolumeOfVisits';
      this.$http.get(url).then(resp => {
        console.log(this.options.series[2].name)
        console.log(this.options.series[2].data)
        console.log(resp.data)

        if (this.options.series[2].name == '走访量') {
          this.options.series[2].data = resp.data
        }

      })
    }

  }
}
</script>

<style lang="scss">
.echarts_bottom {
  width: 100%;
  height: 100%;
}
</style>
