<template>
  <div id="YOUTUBE" class="embed-responsive embed-responsive-16by9">
    <youtube
      :video-id="videoId"
      ref="youtube"
      :player-vars="playerVars"
      @playing="playing"
      class="embed-responsive"
    ></youtube>
    <button @click="playVideoAt(0)">play</button>
  </div>
</template>


<script>
export default {
  name: "YoutubePlayer",
  data() {
    return {
      videoId: null,
      too_seek: -1,
      playerVars: {
        autoplay: 1,
      },
    };
  },
  methods: {
    async playVideoAt(time) {
      await this.player.playVideo();
      console.log("now we playing");
      this.player.seekTo(time);
    },
    playing() {
      console.log("o/ we are watching!!!");
      if (this.too_seek !== -1) {
        this.player.seekTo(this.too_seek);
        this.too_seek = -1;
      }
    },
    seekTo(time) {
      this.player.playVideo();
      this.too_seek = time;
    },
    setId(_id) {
      this.videoId = _id;
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style scoped>
#YOUTUBE {
  max-height: 50vh;
  margin-bottom: 10px;
}
</style>
