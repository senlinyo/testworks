<template>
  <div class="container">
    <div class="company">
      <img src="../assets/kudaiLogo.png" alt>
      <div>
        <p>深圳市库袋科技有限公司</p>
        <p class="english">SHENZHEN KOUBAG TECHNOLOGY CO.LTD</p>
      </div>
    </div>
    <div class="topNav">
      <div>首页</div>
      <div class="circle"></div>
      <div class="download" @click="onDownload">下载</div>
      <div class="circle"></div>
      <div>关于我们</div>
    </div>
    <about/>
    <!-- <div class="aboutText" style="background:rgba(242,242,245,1)">
      <p>深圳市库袋科技创立于2018年，总部位于深圳，目前员工超100人;</p>
      <p>服务超过100个二手车交易市场，服务上万家二手车商，覆盖10个省份;</p>
      <p>是国内规模化、系统化运营的平台二手车频道代运营公司;</p>
      <p>我们致力于汽车频道流通领域智能化运营的产业互联网平台;</p>
      <p>帮助行业有效提升产品价值，实现产业升级;</p>
    </div>-->
    <aboutCompany/>
    <advantage id="advantage"/>
    <superiority/>
    <enterpriseCulture/>
    <top/>
    <div class="footer">
      <div class="bottom_box">
        <p>
          服务合作热线：0755-8255 6579
          <br>© 2014 SHENZHEN KUDAI TECHNOLOGY CO., LTD. 粤ICP备18115837号-1技术支持 深圳
        </p>
      </div>
    </div>
    <!-- <img src='./images/kudai_home.png' alt="">
    <div v-if="pcOrMove" class="banquan">© 2014 SHENZHEN KUDAI TECHNOLOGY CO., LTD. 粤ICP备18115837号-1技术支持 深圳</div>
    <div v-else> SSDS</div>-->
  </div>
</template>
<script>
import about from "./home/about";
import advantage from "./home/advantage";
import aboutCompany from "./home/aboutCompany";
import superiority from "./home/superiority";
import enterpriseCulture from "./home/enterpriseCulture";
import top from "./home/top";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    advantage,
    aboutCompany,
    superiority,
    enterpriseCulture,
    about,
    top
  },
  data() {
    return {
      pcOrMove: true
    };
  },
  created() {},
  methods: {
    getDetail() {
      console.log("你好");
    },
    onDownload() {
      console.log("下载");
      var city_top = document.getElementById("advantage").offsetTop;
      console.log(city_top);
      document.documentElement.scrollTop = city_top;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download {
  cursor: pointer;
}
.company {
  background-color: #dbdbdb;
  /* height: 100px; */
  text-align: center;
  font-size: 36px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.company img {
  margin-right: 10px;
  width: 78px;
  height: 60px;
}

.company > div > .english {
  font-size: 14px;
}

.topNav {
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  font-size: 20px;
  padding: 40px 0;
}

.topNav > div {
  margin-right: 60px;
}

.topNav > .circle {
  width: 8px;
  height: 8px;
  background-color: #000;
  border-radius: 50%;
}

.aboutText {
  text-align: center;
  padding-top: 47px;
}

.aboutText > p {
  line-height: 60px;
}

.footer {
  background: #4a4f56;
  width: 100%;
}
.bottom_box {
  padding: 24px 0;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  overflow: hidden;
  zoom: 1;
}

.bottom_box > p {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  opacity: 0.4;
}

@media screen and (max-width: 500px) {
  .company {
    background-color: #dbdbdb;
    /* height: 100px; */
    text-align: center;
    font-size: 26px;
    padding: 15px 0;
  }
  .company img {
    margin-right: 6px;
    width: 40px;
    height: 34px;
  }
  .company > div > .english {
    font-size: 7px;
  }
  .topNav {
    font-size: 10px;
    padding: 10px 0;
  }

  .topNav > div {
    margin-right: 30px;
  }

  .topNav > .circle {
    width: 4px;
    height: 4px;
    background-color: #000;
    border-radius: 50%;
  }
  .footer {
    background: #4a4f56;
    width: 100%;
  }
  .bottom_box {
    padding: 12px 0;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    overflow: hidden;
    zoom: 1;
  }

  .bottom_box > p {
    font-size: 8px;
    font-weight: 400;
    color: #fff;
    opacity: 0.4;
  }
}
</style>
