<template>
  <div class="hello">
    <img src='./images/kudai_home.png' alt="">
    <div v-if="pcOrMove" class="banquan">© 2014 SHENZHEN KUDAI TECHNOLOGY CO., LTD. 粤ICP备18115837号-1技术支持 深圳</div>
    <div v-else> SSDS</div>
  </div>
</template>
<script>
export default {
  
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(){
    return {
      pcOrMove:true
    }
  },
  created(){
    console.log(document.documentElement.clientWidth);
    if(document.documentElement.clientWidth >640) {
      this.pcOrMove=true
    } else {
      this.pcOrMove=false
    }
  },
  methods: {
    getDetail(){
      console.log('你好')
    },
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello > img {
  width: 100%;
}

.banquan {
  text-align: center;
}
</style>
