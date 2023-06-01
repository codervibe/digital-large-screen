<template>
  <div class="center_bottom">
    <Echart
      :options="options"
      id="bottomLeftChart"
      class="echarts_bottom"
    ></Echart>
  </div>
</template>

<script>
import { currentGET } from 'api'
export default {
  data() {
    return {
      options: {},
    }
  },
  props: {},
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.pageflag = true
      currentGET('big6', { companyName: this.companyName }).then((res) => {
        console.log('安装计划', res)
        if (res.success) {
          const data = {
            category: [
              '已注册',
              '今年注册',
              '资金方数量',
              '保管人数量',
              '存货人数量',
              '保险人数量',
            ],
            barData: [900, 800, 600, 700, 830, 780],
          }
          this.init(data)
        } else {
          this.pageflag = false
          this.$Message({
            text: res.msg,
            type: 'warning',
          })
        }
      })
    },
    init(newData) {
      this.options = {
        xAxis: {
          type: 'category',
          data: newData.category,
        },
        yAxis: { type: 'value' },
        series: [
          {
            name: '个',
            type: 'bar',
            barWidth: 40,
            itemStyle: {
              normal: {
                barBorderRadius: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#956FD4' },
                  { offset: 1, color: '#3EACE5' },
                ]),
              },
            },
            data: newData.barData,
          },
        ],
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.center_bottom {
  width: 100%;
  height: 100%;

  .echarts_bottom {
    width: 100%;
    height: 100%;
  }
}
</style>
