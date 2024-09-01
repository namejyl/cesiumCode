<template>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: 微软雅黑Bbold, serif;
}

ul,
ol,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
  font-family: 微软雅黑Bbold, serif;
}

#app {
  box-sizing: border-box;
  font-family: Microsoft YaHei;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(39 126 230);
  border-radius: 6px;

  &:hover {
    background-color: rgb(39 126 230);
  }
}

#cesiumContainer {
  width: 100%;
  height: 100%;
}

.bx-popup-ctn2 {
  position: absolute;
  z-index: 999;
  color: #fff;
  /* margin: -80px 0 0; */
  margin: 0 0 0 0;
  transform: translate(-50%, -100%);
}

.bx-popup-ctn2 .divpoint-wrap {
  padding: 0;
  width: max-content;
}

.bx-popup-ctn2 .divpoint-center {
  background: linear-gradient(45deg, #4f869d, rgba(18, 93, 120, 0.65), 40%, rgba(30, 127, 162, 0.65));
  border: 1px solid #40aee2;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px #29baf1;
}

.bx-popup-ctn2 .bx-popup-tip {
  width: 17px;
  background: #fff;
  height: 17px;
  padding: 1px;
  margin: -10px auto 0;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.bx-popup-ctn2 .bx-popup-header-ctn {
  background: rgba(0, 173, 255, 0.49);
  color: #fff;
  font-size: 15px;
  padding: 4px;
}

.bx-popup-ctn2 .bx-popup-close {
  position: absolute;
  top: 4px;
  right: 2px;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.bx-popup-ctn2 .bx-popup-content-ctn {
  padding: 10px;
}

.bx-popup-ctn2 .directional {
  bottom: 0;
  left: 0;
  width: 2px;
  height: 40px;
  background-color: #28bbf0;
  transform: none;
  margin: 0 0 0px 50%;
}

.bx-popup-ctn2 .divpoint-border {
  transition: 0.3s ease-in;
  background: linear-gradient(0, #8cdee5 2px, #8cdee5 0) no-repeat, linear-gradient(-90deg, #8cdee5 2px, #8cdee5 0) no-repeat, linear-gradient(-180deg, #8cdee5 2px, #8cdee5 0) no-repeat, linear-gradient(-270deg, #8cdee5 2px, #8cdee5 0) no-repeat;
  background-size: 0 2px, 2px 0, 0 2px, 2px 0;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
}

.bx-popup-ctn2 .divpoint-border:hover {
  background-size: 100% 2px, 2px 100%, 100% 2px, 2px 100%;
}
</style>
