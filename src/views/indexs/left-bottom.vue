<template>
  <div class="down">
    <div class="ranking bg-color-black">
      <dv-scroll-ranking-board
        class="dv-scr-rank-board mt-1"
        :config="ranking"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ranking: {
        data: [
          {
            name: '本月签发数量',
            value: 55,
          },
          {
            name: '本月质押数量',
            value: 120,
          },
          {
            name: '今年签发数量',
            value: 78,
          },
          {
            name: '今年质押数量',
            value: 66,
          },
          {
            name: '累计兑付数量',
            value: 80,
          },
          {
            name: '累计签发数量',
            value: 80,
          },
          {
            name: '有效仓单数量',
            value: 80,
          },
        ],
        carousel: 'single',
        unit: '张',
      },
    }
  },
  computed: {},
  created() {},

  mounted() {},
}
</script>
<style lang="scss" scoped>
::v-deep .rank {
  display: none;
}
.down {
  padding: 6px 4px;
  padding-bottom: 0;
  width: 100%;
  display: flex;
  height: 255px;
  justify-content: space-between;
  .bg-color-black {
    border-radius: 5px;
  }
  .ranking {
    padding: 10px;
    width: 100%;
    .dv-scr-rank-board {
      height: 225px;
    }
  }
  .percent {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 50%;
      height: 120px;
      span {
        margin-top: 8px;
        font-size: 14px;
        display: flex;
        justify-content: center;
      }
    }
    .water {
      width: 100%;
      .dv-wa-le-po {
        height: 120px;
      }
    }
  }
}
</style>
