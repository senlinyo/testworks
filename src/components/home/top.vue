<template>
  <div class="top" @click="toTop">
    <div class="icon"></div>
  </div>
</template>

<script>
export default {
  name: "top",
  methods: {
    toTop() {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      let step = distance / 100;
      // console.log(distance)
      (function jump() {
        if (distance > 0) {
          distance -= step;
          window.scrollTo(0, distance);
          setTimeout(jump, 10);
        }
      })();
    }
  }
};
</script>

<style scoped>
.top {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  background-color: white;
  box-shadow: 0px 4px 16px 0px rgba(58, 98, 93, 0.1);
  transition: background-color 0.2s;
}
.top:hover {
  background-color: lightgray;
}
.icon {
  width: 100%;
  height: 100%;
  background-image: url(".../../../../assets/icon_totop.png");
  background-repeat: no-repeat;
  background-size: 24px 28px;
  background-position: center;
}
</style>
