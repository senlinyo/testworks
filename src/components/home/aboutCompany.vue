<template>
  <div class="banner4">
    <div class="b4_tri"></div>
    <p class="b3_title wow fadeIn">库袋宗旨</p>
    <p class="b3_content wow fadeIn">真诚守信 勇猛精进</p>
    <div class="line_box" style="margin-top: 30px">
      <div class="line"></div>
      <div class="long_line"></div>
    </div>
    <div class="b4_contianer">
      <div class="content">
        <img src="../../assets/bg2.jpg" alt>
        <div class="content-text">
          <p>我叫库袋，寓意就是在移动互联网时代，把车放在口袋里，我们的推广词是“裤袋里的库袋”;</p>
          <p>我们2018年成立于深圳市，一共有20来个小伙伴;</p>
          <p>我们做了个流量与车源内容的推广平台;</p>
          <p>通过移动互联全域,实现线上客流与线下车源互动，帮助传统汽车经销商曝光推广提高流效率;</p>
          <p>我们通过流量平台的优势切入汽车交易场景，植入场景关联业务管理，实现利润回报;</p>
        </div>
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
  /* background-image: url("../../assets/qrcode.jpg"); */
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
  display: flex;
  align-items: center;
}

.content img {
  width: 500px;
  height: 300px;
}

.content-text {
  margin-left: 20px;
}

.content-text > p {
  line-height: 40px;
}

@media screen and (max-width: 500px) {
  .b3_content {
    width: 90%;
    text-align: center;
    margin: 0 auto;
    margin-top: 31px;
  }
  .b3_title {
    margin-top: 0;
  }
  .b4_contianer {
    margin-top: 30px;
    padding-bottom: 20px;
  }
  .content {
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .content > img {
    width: 300px;
    height: 200px;
  }
  .content-text {
    padding: 10px 20px;
    margin-left: 0;
    /* margin-top: 20px;     */
  }

  .content-text > p {
    line-height: 20px;
    font-size: 14px;
  }

  .b4_box {
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
    float: inherit;
  }
}
</style>
