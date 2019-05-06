<template>
  <div class="banner4" style="background:rgba(242,242,245,1)">
    <div class="b4_tri"></div>
    <p class="b3_title wow fadeIn">产品应用</p>
    <p class="b3_content wow fadeIn">多渠道流量分发</p>
    <div class="line_box" style="margin-top: 30px">
      <div class="line"></div>
      <div class="long_line"></div>
    </div>
    <div class="b4_contianer">
      <div align="center" class="b4_box wow zoomInUp" data-wow-delay="0.1s">
        <div class="b4_img b4_img1"></div>
        <p class="b4_img_title">公众号</p>
        <p class="b4_img_centent">我们帮你分析</p>
      </div>
      <div align="center" class="b4_box wow zoomInDown" data-wow-delay="0.2s">
        <div class="b4_img b4_img2"></div>
        <p class="b4_img_title">小程序</p>
        <p class="b4_img_centent">我们帮你画</p>
      </div>
      <div align="center" class="b4_box wow zoomInLeft" data-wow-delay="0.3s">
        <div class="b4_img b4_img3"></div>
        <p class="b4_img_title">苹果</p>
        <p class="b4_img_centent">我们全包</p>
      </div>
      <div align="center" class="b4_box wow zoomInRight" data-wow-delay="0.4s">
        <div class="b4_img b4_img4"></div>
        <p class="b4_img_title">安卓</p>
        <p class="b4_img_centent">我们免费维护</p>
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
  font-size: 32px;
  font-weight: 400;
  margin-top: 96px;
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
  background-image: url("../../assets/bg_triangle.png");
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

.b4_box:hover {
  background-color: #00b49d;
}

.b4_box:hover > .b4_img1 {
  background-image: url("../../assets/qrcode.jpg");
}

.b4_box:hover > .b4_img2 {
  background-image: url("../../assets/qrcode.jpg");
}

.b4_box:hover > .b4_img3 {
  background-image: url("../../assets/qrcode.jpg");
}

.b4_box:hover > .b4_img4 {
  background-image: url("../../assets/qrcode.jpg");
}

.b4_img {
  background-repeat: no-repeat;
  background-position: center 48px;
  background-size: 96px 96px;
  height: 144px;
  transition: background-color 1s;
}

.b4_img1 {
  background-image: url("../../assets/qrcode.jpg");
}

.b4_img2 {
  background-image: url("../../assets/qrcode.jpg");
}

.b4_img3 {
  background-image: url("../../assets/qrcode.jpg");
}

.b4_img4 {
  background-image: url("../../assets/qrcode.jpg");
}

.b4_img_title {
  margin-top: 32px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  transition: color 0.1s;
}

.b4_img_centent {
  margin-top: 16px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  text-align: center;
  transition: color 0.1s;
}

.b4_box:hover > .b4_img_title {
  color: rgba(255, 255, 255, 1);
}

.b4_box:hover > .b4_img_centent {
  color: rgba(255, 255, 255, 1);
}
@media screen and (max-width: 500px) {
  .b3_title {
    margin-top: 10px;
  }

  .b4_contianer {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .b3_content {
    width: 90%;
    text-align: center;
    margin: 0 auto;
    margin-top: 31px;
  }
  .b4_box {
    /* margin: 0 auto; */
    /* margin: 20px 0; */
    /* margin: 20px 0; */
    box-sizing:border-box;
    /* margin-tp: 20px; */
    margin-left: 0;
    margin-top: 0;
    margin: 2.5%;
    width: 45%;
    float: inherit;
  }
  .b4_box:nth-child(odd) {
    /* margin-right: 10px; */
    /* margin: 0 10px; */
  }
}
</style>
