<template>
  <div class="cd-row-wrapper">
    <div class="cd-item">
      <div class="cd-company">
        <div>今年数量</div>
        <div>(张)</div>
      </div>
      <div class="cd-view-r">
        <div class="cd-slider">
          <div class="cd-slider-l"></div>
          <div class="cd-slider-r"></div>
        </div>
        <div class="cd-text">
          <span>签发 66,980</span>
          <span>质押 36,980</span>
        </div>
      </div>
    </div>

    <div class="cd-item">
      <div class="cd-company">
        <div>今年金额</div>
        <div>(万元)</div>
      </div>
      <div class="cd-view-r">
        <div class="cd-slider">
          <div class="cd-slider-l"></div>
          <div class="cd-slider-r"></div>
        </div>
        <div class="cd-text">
          <span>签发 66,980</span>
          <span>质押 36,980</span>
        </div>
      </div>
    </div>

    <div class="cd-item">
      <div class="cd-company">
        <div>本月数量</div>
        <div>(张)</div>
      </div>
      <div class="cd-view-r">
        <div class="cd-slider">
          <div class="cd-slider-l-2"></div>
          <div class="cd-slider-r-2"></div>
        </div>
        <div class="cd-text">
          <span>签发 66,980</span>
          <span>质押 36,980</span>
        </div>
      </div>
    </div>

    <div class="cd-item">
      <div class="cd-company">
        <div>本月金额</div>
        <div>(万元)</div>
      </div>
      <div class="cd-view-r">
        <div class="cd-slider">
          <div class="cd-slider-l-2"></div>
          <div class="cd-slider-r-2"></div>
        </div>
        <div class="cd-text">
          <span>签发 66,980</span>
          <span>质押 36,980</span>
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
  methods: {},
}
</script>

<style>
.cd-row-wrapper {
  width: 400px;
}
.cd-item {
  display: flex;
  margin-bottom: 10px;
}
.cd-company {
  text-align: center;
  color: #56a2fd;
  font-size: 18px;
  line-height: 24px;
  width: 100px;
}
.cd-view-r {
  width: 100%;
  margin-left: 10px;
}
.cd-slider-l {
  width: 40%;
  height: 10px;
  background: #803600;
  overflow: hidden; /*注意这里*/
  box-shadow: 0 0 5px 0px #ddd inset;
}
.cd-slider-r {
  width: 60%;
  height: 10px;
  background: #3a6600;
  margin-left: 4px;
  overflow: hidden; /*注意这里*/
  box-shadow: 0 0 5px 0px #ddd inset;
}

.cd-slider-l-2 {
  width: 66%;
  height: 10px;
  background: #006543;
  overflow: hidden; /*注意这里*/
  box-shadow: 0 0 5px 0px #ddd inset;
}
.cd-slider-r-2 {
  width: 34%;
  height: 10px;
  background: #003864;
  margin-left: 4px;
  overflow: hidden; /*注意这里*/
  box-shadow: 0 0 5px 0px #ddd inset;
}
.cd-slider {
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 4px;
}
.cd-text {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #56a2fd;
  width: 100%;
}
</style>
