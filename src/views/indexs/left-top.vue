<template>
  <div>
    <div class="bottom-data">
      <div
        class="item-box mt-2"
        v-for="(item, index) in numberData"
        :key="index"
      >
        <p class="text" style="text-align: center">
          {{ item.text }}
          <span class="colorYellow">(万元)</span>
        </p>
        <div class="d-flex">
          <span class="coin">￥</span>
          <dv-digital-flop class="dv-digital-flop" :config="item.number" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Echart from '@/components/echart'
export default {
  data() {
    return {
      options: {},
      numberData: [
        {
          number: {
            number: [15],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24,
            },
          },
          text: '累计兑付金额',
        },
        {
          number: {
            number: [1144],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24,
            },
          },
          text: '累计签发金额',
        },

        {
          number: {
            number: [157],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24,
            },
          },
          text: '今年签发金额',
        },
        {
          number: {
            number: [157],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24,
            },
          },
          text: '今年质押金额',
        },
        {
          number: {
            number: [157],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24,
            },
          },
          text: '本月签发金额',
        },
        {
          number: {
            number: [361],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24,
            },
          },
          text: '本月质押',
        },
      ],
    }
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.changeTiming()
  },
  methods: {
    changeTiming() {
      setInterval(() => {
        this.changeNumber()
      }, 3000)
    },
    changeNumber() {
      this.numberData.forEach((item, index) => {
        item.number.number[0] += ++index
        item.number = { ...item.number }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.d-flex {
  display: flex;
  margin-left: 80px;
  margin-bottom: 30px;
  margin-top: 10px;
}
.bottom-data {
  .item-box {
    & > div {
      padding-right: 5px;
    }
    font-size: 14px;
    float: right;
    position: relative;
    width: 50%;
    color: #d3d6dd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .dv-digital-flop {
      width: 120px;
      height: 30px;
    }
    // 金币
    .coin {
      position: relative;
      top: 6px;
      font-size: 20px;
      color: #ffc107;
    }
    .colorYellow {
      color: yellowgreen;
    }
    p {
      text-align: center;
    }
  }
}
</style>
