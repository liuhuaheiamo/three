<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
    <students></students>
    <Teacher></Teacher> -->
    <!-- 根据按钮的值不同，显示不同页面 -->
    <button @click="current = 'HelloWorld'">1</button>
    <button @click="current = 'students'">2</button>
    <button @click="current = 'Teacher'">3</button>
    <!-- 动态组件 -->
    <component :is="current"> </component>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import students from "./components/students";
import Teacher from "./components/Teacher";

export default {
  name: "App",
  data() {
    return {
      current: HelloWorld,
    };
  },
  components: {
    HelloWorld,
    students,
    Teacher,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
