<template>
  <div class="banner">
    <div class="tag  wow flipInY" data-wow-delay="0.2s">
      <p class="title">企业文化</p>
      <div class="line_box">
        <div class="line"></div>
      </div>
    </div>
    <div class="box">
      <div class="box-con box1  wow flipInX" data-wow-delay="0.2s">
        <p class="box-title">愿景</p>
        <p class="box-content">卫生</p>
      </div>
      <div class="box-con box2  wow flipInX" data-wow-delay="0.3s">
        <p class="box-title">使命</p>
        <p class="box-content">服务更多汽车交易场所</p>
      </div>
      <div class="box-con box3  wow flipInX" data-wow-delay="0.4s">
        <p class="box-title">价值观</p>
        <p class="box-content">给客户带来商业价值</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "banner4"
  }
</script>

<style scoped>
  p {
    margin: 0;
    text-align: center;
  }

  .banner {
    padding-top: 96px;
    width: 100%;
    background: rgba(247, 247, 250, 1);
    position: relative;
    height: 584px;
    overflow: hidden;
    zoom: 1;
  }

  .title {
    padding-top: 31px;
    font-size: 32px;
    font-weight: 400;
    color: rgba(82, 82, 82, 1);
    text-align: center;
  }

  .line_box {
    width: 100%;
    padding-top: 32px;
  }

  .line {
    width: 100px;
    height: 6px;
    background: rgba(0, 180, 157, 1);
    margin: 0 auto;
  }

  .tag {
    position: absolute;
    width: 343px;
    height: 132px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 10px 0px rgba(47, 59, 58, 0.2);
    border-radius: 20px;
    left: 50%;
    margin-left: -171px;
  }
  .box{
    margin: 90px auto 56px;
    max-width:1200px;
    background:rgba(0,203,151,1);
    padding:0 95px 0 95px;
    display: flex;
  }
  .box1{
    background-image: url("../../assets/icon_culture_1.png");
  }
  .box2{
    background-image: url("../../assets/icon_culture_2.png");
  }
  .box3{
    background-image: url("../../assets/icon_culture_3.png");
  }
  .box-con{
    flex: 1;
    width: 100%;
    background-size: 48px 48px;
    background-position:center 90px;
    background-repeat: no-repeat;
    height: 300px;
  }
  .box-title{
    padding-top: 187px;
    font-size:24px;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .box-content{
    padding-top: 16px;
    font-size:18px;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  @media screen and (max-width: 500px) {
    .box{
      display: block;
      margin-bottom: 20px;
    }
    .banner{
      height: auto;
    }
  }
</style>
