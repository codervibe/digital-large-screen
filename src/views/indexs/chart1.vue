<template>
  <div>
    <div class="cd-total">
      <div class="percentloop">
        <div class="circle-left">
          <div ref="leftcontent"></div>
        </div>
        <div class="circle-right">
          <div ref="rightcontent"></div>
        </div>
        <div class="number">{{ percent }} %</div>
      </div>
      <div class="cd-total-text">
        <div class="cd-total-text-number">
          <span class="cd-total-text-l">12.684</span
          ><span class="cd-total-text-r">/30.000</span>
        </div>
        <div class="cd-total-text-name">
          <span class="cd-total-text-l">累计兑付数量</span
          ><span class="cd-total-text-r">/累计签发数量(张)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentNum: 65.5,
      speed: 1,
      percent: 0,
      initDeg: 0,
      timeId: null,
      animationing: false,
    }
  },
  methods: {
    transformToDeg(percent) {
      let deg = 0
      if (percent >= 100) {
        deg = 360
      } else {
        deg = parseInt((360 * percent) / 100)
      }
      return deg
    },
    transformToPercent(deg) {
      let percent = 0
      if (deg >= 360) {
        percent = 100
      } else {
        percent = parseInt((100 * deg) / 360)
      }
      return percent
    },
    rotateLeft(deg) {
      // 大于180时，执行的动画
      this.$refs.leftcontent.style.transform = 'rotate(' + (deg - 180) + 'deg)'
    },
    rotateRight(deg) {
      // 小于180时，执行的动画
      this.$refs.rightcontent.style.transform = 'rotate(' + deg + 'deg)'
    },
    goRotate(deg) {
      this.animationing = true
      this.timeId = setInterval(() => {
        if (deg > this.initDeg) {
          // 递增动画
          this.initDeg += Number(this.speed)
          if (this.initDeg >= 180) {
            this.rotateLeft(this.initDeg)
            this.rotateRight(180) // 为避免前后两次传入的百分比转换为度数后的值不为步距的整数，可能出现的左右转动不到位的情况。
          } else {
            this.rotateRight(this.initDeg)
          }
        } else {
          // 递减动画
          this.initDeg -= Number(this.speed)
          if (this.initDeg >= 180) {
            this.rotateLeft(this.initDeg)
          } else {
            this.rotateLeft(180) // 为避免前后两次传入的百分比转换为度数后的值不为步距的整数，可能出现的左右转动不到位的情况。
            this.rotateRight(this.initDeg)
          }
        }
        this.percent = this.transformToPercent(this.initDeg) // 百分比数据滚动动画
        const remainer = Number(deg) - this.initDeg
        if (Math.abs(remainer) < this.speed) {
          this.initDeg += remainer
          if (this.initDeg > 180) {
            this.rotateLeft(deg)
          } else {
            this.rotateRight(deg)
          }
          this.animationFinished()
        }
      }, 10)
    },
    animationFinished() {
      this.percent = this.percentNum // 百分比数据滚动动画
      this.animationing = false
      clearInterval(this.timeId)
      this.$emit('animationFinished') // 动画完成的回调
    },
  },
  created() {
    this.goRotate(this.transformToDeg(this.percentNum))
  },
  watch: {
    percentNum: function (val) {
      if (this.animationing) return
      this.goRotate(this.transformToDeg(val))
    },
  },
}
</script>

<style scoped>
.cd-total {
  display: flex;
}
.cd-total-text {
  margin-left: 20px;
}
.cd-total-text-number {
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.cd-total-text-name {
  font-size: 18px;
}
.cd-total-text-l {
  color: #56a2fd;
}
.cd-total-text-r {
  color: #3769a5;
}
.percentloop {
  position: relative;
  height: 130px;
  width: 130px;
  border-radius: 50%;
  overflow: hidden;
}
.circle-left,
.circle-right {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #47a2f7;
  overflow: hidden;
}
.circle-left div,
.circle-right div {
  width: 100%;
  height: 100%;
  background-color: #172f49;
  transform-origin: right center;
}
.circle-left {
  left: -50%;
}
.circle-right {
  left: 50%;
}
.circle-right div {
  transform-origin: left center;
}
.number {
  position: absolute;
  top: 9%;
  bottom: 9%;
  left: 9%;
  right: 9%;
  background-color: #08111a;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4d9eff;
}
</style>
