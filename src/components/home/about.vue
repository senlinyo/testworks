<template>
  <div class="banner4" style="background:rgba(242,242,245,1)">
    <div class="b4_tri"></div>
    <p class="b3_title wow fadeIn">关于公司</p>
    <p class="b3_content wow fadeIn">真诚守信 勇猛精进</p>
    <div class="line_box" style="margin-top: 30px">
      <div class="line"></div>
      <div class="long_line"></div>
    </div>
    <div class="b4_contianer">
      <div class="content">
        <p>深圳市库袋科技创立于2018年，总部位于深圳，目前员工超100人;</p>
        <p>服务超过100个二手车交易市场，服务上万家二手车商，覆盖10个省份;</p>
        <p>是国内规模化、系统化运营的平台二手车频道代运营公司;</p>
        <p>我们致力于汽车频道流通领域智能化运营的产业互联网平台;</p>
        <p>帮助行业有效提升产品价值，实现产业升级;</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner4"
};
</script>

<style scoped>
.line {
  width: 100px;
  height: 6px;
  background: rgba(0, 180, 157, 1);
  margin: 0 auto;
}

.long_line {
  width: 100%;
  height: 1px;
  background: rgba(216, 216, 216, 1);
}
.b3_title {
  margin-top: 96px;
  font-size: 32px;
  font-weight: 400;
  color: rgba(82, 82, 82, 1);
  text-align: center;
}

.b3_content {
  margin-top: 31px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  opacity: 0.55;
  text-align: center;
}
.b4_tri {
  height: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 103px 40px;
  /* background-image: url("../../assets/bg_triangle.png"); */
}

.b4_contianer {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 98px;
  overflow: hidden;
  zoom: 1;
  padding-bottom: 96px;
}

.b4_box {
  margin-left: 24px;
  width: 276px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 16px 0px rgba(58, 98, 93, 0.1);
  float: left;
  margin-top: 48px;
  transition: background-color 1s;
  height: 282px;
}

.content {
  text-align: center;
}

.content > p {
  line-height: 40px;
}

@media screen and (max-width: 500px) {
  .b3_title {
    margin-top: 0;
  }

  .b4_contianer {
    margin: 0 auto;
    margin-top: 38px;
    overflow: hidden;
    zoom: 1;
    padding-bottom: 36px;
  }
  .content {
    text-align: center;
  }

  .content > p {
    line-height: 20px;
    font-size: 12px;
  }
  .b3_content {
    width: 90%;
    text-align: center;
    margin: 0 auto;
    margin-top: 31px;
  }
  .b4_box {
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
    float: inherit;
  }
}
</style>
