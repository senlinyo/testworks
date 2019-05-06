<template>
  <div class="banner5">
    <p class="b3_title wow fadeIn">服务优势</p>
    <!-- <p class="b3_content wow fadeIn">提供</p> -->
    <div class="line_box" style="margin-top: 30px">
      <div class="line"></div>
      <div class="long_line"></div>
    </div>
    <div class="b5_box">
      <div class="b5_con wow fadeInLeft con1" data-wow-delay="0.1s">
        <div class="b5_img b5_img1"></div>
        <div class="b5_con_con">
          <p class="b5_title">产业链化运营，业务稳定</p>
          <p class="b5_content">经过5年的业务沉淀，产业链规模形成</p>
        </div>
      </div>
      <div class="b5_con wow fadeInUp" data-wow-delay="0.2s">
        <div class="b5_img b5_img2"></div>
        <div class="b5_con_con">
          <p class="b5_title">第三方服务</p>
          <p class="b5_content">
            提供综合性，全方位的产业化新车，二手车
            服务与解决方案
          </p>
        </div>
      </div>
      <div class="b5_con wow fadeInRight con3" data-wow-delay="0.3s">
        <div class="b5_img b5_img3"></div>
        <div class="b5_con_con">
          <p class="b5_title">全国物流</p>
          <p class="b5_content">高密度网点，专业验资，物流垫资等综合服务平台</p>
        </div>
      </div>
      <!-- <div class="b5_con wow fadeInDown con4" data-wow-delay="0.4s">
        <div class="b5_img b5_img4"></div>
        <div class="b5_con_con">
          <p class="b5_title">人才汇聚</p>
          <p class="b5_content">团队来自平安，宜信，阿里和腾讯等顶尖企业</p>
        </div>
      </div>
      <div class="b5_con wow fadeInRight con3" data-wow-delay="0.4s">
        <div class="b5_img b5_img4"></div>
        <div class="b5_con_con">
          <p class="b5_title">全国线下服务团队，线上线下相结合</p>
          <p class="b5_content">
            产品线完整，京东等平台共同结合，线下检测，交车，
            置换，过户等落地服务
          </p>
        </div>
      </div> -->
      <div class="b5_con wow fadeInDown con4" data-wow-delay="0.4s">
        <div class="b5_img b5_img4"></div>
        <div class="b5_con_con">
          <p class="b5_title">交易保障</p>
          <p class="b5_content">上车前验车及质量承诺与交车前第三方检测交付承诺双重保障</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner5"
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
.b5_box {
  max-width: 1126px;
  width: 100%;
  margin: 0 auto;
  margin-top: 98px;
  overflow: hidden;
  zoom: 1;
  padding-bottom: 96px;
}

.b5_con {
  width: 551px;
  margin-left: 24px;
  float: left;
}
.con1 {
  margin-left: 0;
}
.con3 {
  margin-left: 0;
  margin-top: 24px;
}
.con4 {
  margin-top: 24px;
}
.b5_img {
  width: 82px;
  height: 82px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 10px 0px rgba(47, 59, 58, 0.1);
  border-radius: 50%;
  position: absolute;
  float: left;
  margin-top: 29px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 110px 110px;
}
.b5_img1 {
  background-image: url("../../assets/bg_triangle.png");
}
.b5_img2 {
  background-image: url("../../assets/bg_triangle.png");
}
.b5_img3 {
  background-image: url("../../assets/bg_triangle.png");
}
.b5_img4 {
  background-image: url("../../assets/bg_triangle.png");
}
.b5_con_con {
  width: 510px;
  height: 140px;
  float: right;
  background: rgba(250, 250, 250, 1);
  box-shadow: 0px 4px 8px 0px rgba(47, 59, 58, 0.16);
}

.b5_title {
  padding: 32px 0 0 56px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.b5_content {
  padding: 15px 0 0 56px;
  font-size: 18px;
  font-weight: 300;
  color: rgba(0, 0, 0, 1);
  opacity: 0.5;
}
@media screen and (max-width: 500px) {
  .b5_box {
    margin-top: 50px;
  }
  .b5_con {
    width: 90%;
    float: inherit;
    margin: 0 auto;
    overflow: hidden;
    zoom: 1;
    padding-top: 60px;
    position: relative;
  }
  .b3_title {
    margin-top: 20px;
  }
  .con1 {
    margin: 0 auto;
  }
  .con3 {
    margin: 0 auto;
  }
  .con4 {
    margin: 0 auto;
  }
  .b5_con_con {
    width: 100%;
  }
  .b5_img {
    float: inherit;
    top: -20px;
    left: 38%;
  }
}
</style>
