<template>
  <div class="hello">
    <div class="top">
      <!-- <img src="" alt=""> -->
      <div class="company">
        <p>深圳市库袋科技有限公司</p>
        <p class="english">SHENZHEN KOUBAG TECHNOLOGY CO.LTD</p>
      </div>
    </div>
    <div class="topNavBar">
      <a>首页</a>
      <a>下载</a>
      <a href="#abc">关于我们</a>
    </div>
    <div class="companyIntroduce">
      <div class="companyText">
        <p>深圳市库袋科技有限公司创始于2018年，总部位于深圳，目前员工超过100人;</p>
        <p>服务超过100个二手车交易市场，服务上万家二手车商，覆盖10个省份l;</p>
        <p>是国内规模、系统化运营的平台二手车频道代运营公司;</p>
        <p>我们致力于汽车流通领域智能化运营的产业互联网平台;</p>
        <p>帮助行业有效提升产品价值，实现产业链;</p>
      </div>
    </div>
    <div id="abc">
      <div class="aboutCompany">
        <p class="aboutText">关于公司</p>
        <P class="border"></P>
        <p>ABOUT COMPANY</p>
      </div>
      <div class="companyContainer">
        <img src="./images/bg2.jpg" alt>
        <div class="companyContent">
          <p>我叫库袋，寓意就是在互联网时代，把车库放在口袋里，我们的推广词是“裤袋里的库袋”;</p>
          <p>我们2018年成立在深圳，一共有20来个小伙伴;</p>
          <p>我们做了个流量与车源内容的推广平台</p>
          <p>通过移动互联网域，实现线上客流与线下车源互动，帮助传统汽车经销商曝光推广提高流量通效率;</p>
          <p>我们通过流量平台的汽车交易场景，植入场景关联业务管理，实现利润回报;</p>
        </div>
      </div>
    </div>
    <div class="purpose">
      <div class="purposeTop">
        <p style="font-size:40px">库袋宗旨</p>
        <p style="font-size:16px">ALLIANCE PURPOSE</p>
      </div>
      <div class="purposeText">真诚守信 勇猛精进</div>
    </div>
    <div class="productContainer">
      <div class="flex" style="margin-bottom:200px">
        <div class="center">
          <img src="./images/qrcode.jpg" alt>
          <p>公众号</p>
        </div>
        <div style="margin:0 150px" class="center">
          <img src="./images/qrcode.jpg" alt>
          <p>公众号</p>
        </div>
        <div class="center">
          <img src="./images/qrcode.jpg" alt>
          <p>我要卖车</p>
        </div>
      </div>
      <div class="flex">
        <div class="center">
          <img src="./images/qrcode.jpg" alt>
          <p>公众号</p>
        </div>
        <div style="margin:0 150px" class="center">
          <img src="./images/qrcode.jpg" alt>
          <p>公众号</p>
        </div>
        <div class="center">
          <img src="./images/qrcode.jpg" alt>
          <p>我要卖车</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="line"></div>
      <div class="bottomBox">
        <p>服务合作专线：0755-8255 6579</p>
        <br>© 2014 SHENZHEN KUDAI TECHNOLOGY CO., LTD. 粤ICP备18115837号-1技术支持 深圳
      </div>
    </div>
    <!-- <img src='./images/kudai_home.png' alt=""> -->
    <!-- <div v-if="pcOrMove" class="banquan">© 2014 SHENZHEN KUDAI TECHNOLOGY CO., LTD. 粤ICP备18115837号-1技术支持 深圳</div>
    <div v-else>SSDS</div>-->
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      pcOrMove: true
    };
  },
  created() {
    console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth > 640) {
      this.pcOrMove = true;
    } else {
      this.pcOrMove = false;
    }
  },
  methods: {
    getDetail() {
      console.log("你好");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  text-align: center;
}

.top {
  background-color: #dbdbdb;
  padding: 14px 0;
  font-size: 36px;
}
.company {
  text-align: center;
}
.company > .english {
  font-size: 14px;
}
.topNavBar {
  display: flex;
  padding: 16px 0;
  justify-content: center;
}
.topNavBar > a {
  text-decoration: none;
  color: #000000;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 20px;
  font-weight: bold;
}
.topNavBar > a::after {
  margin-left: 2px;
  margin-left: 20px;
  content: "";
  display: inline-block;
  background-color: #535353;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid #535353;
}
.topNavBar > a:last-child:after {
  display: none;
}
.companyIntroduce {
  width: 100%;
  overflow: hidden;
  zoom: 1;
  opacity: 0.8;
  background-size: 100% 100%;
  background-image: url(images/bg1.jpg);
  padding-bottom: 96px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.companyText {
  font-size: 20px;
  font-weight: 200;
}
.aboutCompany {
  /* border-bottom: 2px solid #dbdbdb; */
  text-align: center;
  margin: 20px 0;
}
.border {
  height: 1px;
  background-color: #dbdbdb;
}
.aboutText {
  font-size: 40px;
  display: inline-block;
  padding: 0 7px;
  border-bottom: 2px solid #535353;
}
.companyContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
}
.companyContainer > img {
  width: 500px;
  height: 300px;
}
.companyContent {
  padding-left: 60px;
}
.companyContent > p {
  padding: 10px 0;
}
.purpose {
  width: 100%;
  overflow: hidden;
  zoom: 1;
  opacity: 0.5;
  background-size: 100% 100%;
  background-image: url(images/bg3.jpg);
  color: #fff;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.purposeTop {
  text-align: center;
}
.purposeText {
  font-size: 60px;
}
.productContainer {
  width: 100%;
  overflow: hidden;
  zoom: 1;
  opacity: 0.9;
  background-size: 100% 100%;
  background-image: url(images/bg4.jpg);
  color: #fff;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.productContainer img {
  width: 100px;
  height: 100px;
}

.footer {
  background: #dbdbdb;
  width: 100%;
  padding-top: 47px;
}

.line {
  width: 100%;
  height: 2px;
  background: #f3f3f3;
  opacity: 0.49;
}
.bottomBox {
  padding: 24px 0;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  overflow: hidden;
  zoom: 1;
}
@media screen and (max-width: 500px) {
  .top {
    background-color: #dbdbdb;
    padding: 10px 0;
    font-size: 24px;
  }
}
/* .hello > img {
  width: 100%;
}

.banquan {
  text-align: center;
} */
</style>
