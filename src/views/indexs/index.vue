<!--
 * @Author: daidai
 * @Date: 2022-03-04 09:23:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:05:02
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\index.vue
-->
<template>
  <div class="contents">
    <div class="contetn_left">
      <div class="pagetab">
        <!-- <div class="item">实时监测</div> -->
      </div>
      <ItemWrap class="contetn_left-top contetn_lr-item2" title="仓单数据">
        <div class="chart-top-left">
          <Chart1 class="mb-20" />
          <Chart1 class="mb-20" />
          <Chart2 />
        </div>
      </ItemWrap>
      <ItemWrap class="contetn_left-center contetn_lr-item" title="融资数据">
        <Chart3 />
      </ItemWrap>
    </div>
    <div class="contetn_center">
      <CenterMap class="contetn_center_top" />
      <ItemWrap class="contetn_center-bottom" title="一标三实统计">
        <oneStandardThreeRealStatistics />
      </ItemWrap>
    </div>
    <div class="contetn_right">
      <ItemWrap class="contetn_left-bottom contetn_lr-item" style="height: 380px" title="人员管控">
        <div class="bxsj">
<!--          <Chart1 class="mb-20" />
          <Chart1 />-->
          <personnelControl/>
        </div>
      </ItemWrap>
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="场所检查" style="padding: 0 10px 16px 10px">
        <Khsj />
      </ItemWrap>
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="存证数据 " style="padding: 0 10px 16px 10px">
        <RightBottom />
      </ItemWrap>
    </div>
  </div>
</template>

<script>
import LeftTop from './left-top.vue'
import LeftCenter from './left-center.vue'
import LeftBottom from './left-bottom.vue'
import CenterMap from './center-map.vue'
import CenterBottom from './center-bottom.vue'
import RightTop from './right-top.vue'
import RightCenter from './right-center.vue'
import RightBottom from './right-bottom.vue'
import Chart1 from './chart1.vue'
import Chart2 from './chart2.vue'
import Chart3 from './chart3.vue'
import Khsj from './siteInspection.vue'
import oneStandardThreeRealStatistics from './oneStandardThreeRealStatistics.vue'
import personnelControl from './personnelControl.vue'
export default {
  components: {
    LeftTop,
    LeftCenter,
    LeftBottom,
    CenterMap,
    RightTop,
    RightCenter,
    RightBottom,
    CenterBottom,
    Chart1,
    Chart2,
    Chart3,
    Khsj,
    oneStandardThreeRealStatistics,
    personnelControl
  },
  data() {
    return {}
  },
  filters: {
    numsFilter(msg) {
      return msg || 0
    },
  },
  created() {},

  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
// 内容
.bxsj {
  padding: 20px 30px;
}
.contetn_left-center{
  padding: 0px 0px 0 0;
}
.chart-top-left {
  padding: 20px 30px;
}
.mb-20 {
  margin-bottom: 20px;
}
.contents {
  .contetn_left,
  .contetn_right {
    width: 540px;
    box-sizing: border-box;
    // padding: 16px 0;
  }

  .contetn_center {
    width: 720px;
  }

  //左右两侧 三个块
  .contetn_lr-item {
    height: 310px;
  }
  .contetn_lr-item2 {
    height: 620px;
  }

  .contetn_center_top {
    width: 100%;
  }

  // 中间
  .contetn_center {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .contetn_center-bottom {
    height: 315px;
  }

  //左边 右边 结构一样
  .contetn_left,
  .contetn_right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
  }
}

@keyframes rotating {
  0% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
  50% {
    -webkit-transform: rotate(180deg) scale(1.1);
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}
</style>