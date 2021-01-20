<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <a href="/api/captions/EffiRHdKRv8"><h1>example response</h1></a>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TableComp />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TableComp from "./components/TableComp.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    TableComp,
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
