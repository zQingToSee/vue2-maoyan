<template>
  <div class="logo">
    <img src="../../assets/images/logo.png" alt="" />
    <a href="javascript:;" class="find">发现最新最热电影</a>
    <span class="split"></span>
    <a href="javascript:;" class="open">
      打开App
      <img
        src="https://p0.meituan.net/scarlett/70a18c9d3c345f442e5a4e6bf2d16180779.png"
        alt=""
      />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
.logo {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid @border-color;
  background: #fff;
  position: relative;
  font-family: PingFangSC-Medium;
  .center();

  > img {
    width: 94px;
    height: 39px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .find {
    font-size: @s-font;
    display: inline-block;
    position: absolute;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
    height: 17px;
    line-height: 17px;
    font-family: PingFangSC-Regular, Arial, Helvetica, sans-seri;
    font-weight: 620;
    color: #666;
    text-decoration: none;
  }
  .split {
    display: inline-block;
    position: absolute;
    right: 95px;
    width: 0.5px;
    height: 13px;
    background: rgba(0, 0, 0, 0.1);
    font-size: 14px;
  }
  .open {
    font-size: @m-font;
    position: absolute;
    right: 12px;
    height: 20px;
    line-height: 20px;
    color: #b37e7e;
    font-family: PingFangSC-Medium;
    font-weight: 700;
    > img {
      width: 11px;
      height: 11px;
      padding-left: 1px;
      display: inline-block;
    }
  }
}
</style>
