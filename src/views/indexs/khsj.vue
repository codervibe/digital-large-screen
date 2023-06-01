<template>
  <div class="kh-content">
    <div class="kh-row">
      <div class="ku-item">
        <div class="kh-label">已注册企业</div>
        <div class="kh-value">930</div>
      </div>
      <div class="ku-item">
        <div class="kh-label">几年注册企业</div>
        <div class="kh-value">930</div>
      </div>
    </div>

    <div class="kh-row">
      <div class="ku-item">
        <div class="kh-label">已注册企业</div>
        <div class="kh-value">930</div>
      </div>
      <div class="ku-item">
        <div class="kh-label">几年注册企业</div>
        <div class="kh-value">123123</div>
      </div>
    </div>

    <div class="kh-row">
      <div class="ku-item">
        <div class="kh-label">已注册企业</div>
        <div class="kh-value">930</div>
      </div>
      <div class="ku-item">
        <div class="kh-label">几年注册企业</div>
        <div class="kh-value">930</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.kh-row {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  width: 500px;
  margin-bottom: 30px;
}
.kh-content {
  padding: 20px 30px;
  color: #56a2fd;
}
.ku-item {
  display: flex;
  justify-content: flex-start;
  width: 50%;
  .kh-label {
    margin-right: 20px;
  }
  .kh-value {
    font-weight: bold;
    font-size: 26px;
  }
}
</style>
