<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <a href="/api/captions/EffiRHdKRv8"><p>example response</p></a>
    <h4>
      Input a different youtube video link. See the captions below. Click one to
      jump to that point in the video. Or use ctrl+f to search.
    </h4>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CaptionLister initial_video_id="EffiRHdKRv8" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CaptionLister from "./components/CaptionLister";
export default {
  name: "App",
  components: {
    // HelloWorld,
    CaptionLister,
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
