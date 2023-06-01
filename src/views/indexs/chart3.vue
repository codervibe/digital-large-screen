<template>
  <div class="rz-wapper">
    <div class="rz-block">
      <span>客户累计融资</span>
      <span class="rz-moneny">186.350</span>
      <span>万元</span>
    </div>
    <div class="rz-slider-wrapper">
      <div class="rz-slider-item">
        <div class="rz-slider-row">
          <div class="rz-slider-color">
            <span>今年融资完成率</span>
          </div>
          <span class="rz-text">86%</span>
        </div>

        <div class="rz-target-text">
          <span>已完成 6,666.980万元</span>
          <span>目标 9,996.980万元</span>
        </div>
      </div>

      <div class="rz-slider-item">
        <div class="rz-slider-row">
          <div class="rz-slider-color">
            <span>今年融资完成率</span>
          </div>
          <span class="rz-text">86%</span>
        </div>

        <div class="rz-target-text">
          <span>已完成 6,666.980万元</span>
          <span>目标 9,996.980万元</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style>
.rz-wapper {
  padding: 0 30px;
}
.rz-slider-item {
  margin-bottom: 30px;
}
.rz-slider-row {
  width: 100%;
  height: 26px;
  background: #2c4466;
  border-radius: 0px 13px 13px 0px;
  position: relative;
  color: #fff;
  fonts-size: 16px;
  line-height: 26px;
  padding-right: 6px;
  box-sizing: border-box;
}
.rz-text {
  position: absolute;
  right: 6px;
  top: 0;
}
.rz-slider-color {
  width: 315px;
  height: 26px;
  background: linear-gradient(90deg, rgba(86, 162, 253, 0) 0%, #56a2fd 100%);
  border-radius: 0px 13px 13px 0px;
  padding-left: 6px;
  box-sizing: border-box;
}
.rz-target-text {
  display: flex;
  justify-content: space-between;
  color: #56a2fd;
  font-size: 18px;
  margin-top: 10px;
}
.rz-block {
  color: #56a2fd;
  font-size: 18px;
  margin-bottom: 30px;
}
.rz-moneny {
  font-size: 30px;
  margin-left: 20px;
  display: inline-block;
  margin-top: 8px;
}
</style>
