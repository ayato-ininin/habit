<template>
  <div class="gradient"></div>
</template>

<style scoped>
.gradient {
  position: relative;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    farthest-corner at 0 0,
    #ffa500 0%,
    #ffa500 50%,
    #00ffff 90%,
    #00ffff 100%
  );
}

.gradient:before {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    300px at 350px 200px,
    rgba(255, 204, 51, 1) 0%,
    rgba(255, 204, 51, 1) 20%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
}

.gradient:after {
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    300px at 0 350px,
    rgba(102, 204, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
}
</style>