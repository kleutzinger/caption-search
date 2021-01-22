<template>
  <div class="container" id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Youtube/> -->
    <!-- <youtube video-id="BBJa32lCaaY" /> -->
    <!-- <YoutubePlayer/> -->
    <CaptionLister initial_video_id="WnzlbyTZsQY" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CaptionLister from "./components/CaptionLister";
// import YoutubePlayer from "./components/YoutubePlayer"
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
  height: 100%;
}
body {
  background-image: url("~@/assets/bg.png");
}
</style>
