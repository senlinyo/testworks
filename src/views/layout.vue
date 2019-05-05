<template>
  <div>
    <HelloWorld/>
    <!-- <div class="footer">
      <router-link to="agreement">库袋科技车管助手用户服务协议</router-link>
      <router-link to="privacy">库袋用户隐私协议</router-link>
    </div> -->
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
.footer {
  text-align: center;
}
</style>
