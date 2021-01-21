<template>
  <div id="app">
    <a href="/api/captions/EffiRHdKRv8"><p>example api response</p></a>
    <h4>
      Input a different youtube video link. See the captions below. Click `seek` to
      jump to that point in the video. Or use ctrl+f to search.
    </h4>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Youtube/> -->
    <!-- <youtube video-id="BBJa32lCaaY" /> -->
    <!-- <YoutubePlayer/> -->
    <CaptionLister initial_video_id="-OXhMc0wpes" />
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
}
</style>
