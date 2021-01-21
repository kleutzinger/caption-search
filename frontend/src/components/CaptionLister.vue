<template>
  <div>
    <YoutubePlayer ref="playa" />
    <a href="https://youtu.be/-OXhMc0wpes">https://youtu.be/-OXhMc0wpes</a>
    <form @submit.prevent="handleSubmit">
      <button type="submit">Submit</button>
      <label>
        New youtube link
        <input ref="form_video_id" type="text" v-model="input_val" />
      </label>
    </form>
    <ul v-if="captions">
      <li v-for="cap in captions" v-bind:key="cap.start">
        <span> {{ Math.floor(cap.start)  }} </span>
        <a :href="`${youtube_link}&t=${Math.floor(cap.start)}`"><button>[yt]</button></a>
        <a href="#" @click.prevent="handleTimeClick(cap.start)"><button>seek</button></a>
        <a :href="`${youtube_link}&t=${Math.floor(cap.start)}`">{{
          cap.text
        }}</a>
      </li>
    </ul>
    <h2 v-if="!captions">loading...</h2>
  </div>
</template>

<script>
const to_href = (video_id, start) => {
  start = Math.floor(start);
  return `https://youtube.com/watch?v=${video_id}&t=${start}`;
};
// import search_obj from "../assets/table-example.json";
import axios from "axios";
import YoutubePlayer from "./YoutubePlayer";
export default {
  props: ["initial_video_id"],
  name: "CaptionLister",
  components: {
    YoutubePlayer,
  },
  mounted() {
    // this is run after the element is created on page
    this.$refs.playa.setId(this.yt_id);
    this.populate();
  },
  data() {
    return {
      yt_id: this.initial_video_id,
      captions: null,
      input_val: `https://youtube.com/watch?v=${this.initial_video_id}`,
    };
  },
  computed: {
    comp_id: function () {
      // compute id from form val
      const v = this.input_val;
      const v_id = this.youtube_parser(v);
      console.log("got id: ", v_id);
      return v_id;
    },
    youtube_link: function () {
      return `https://youtube.com/watch?v=${this.yt_id}`;
    },
  },
  methods: {
    to_href,
    handleTimeClick(data) {
      this.$refs.playa.playVideoAt(Math.floor(data));
      this.$refs.playa.$el.scrollIntoView();
      
    },
    handleSubmit() {
      console.log("submitted by form:", this.comp_id);
      this.captions = null;
      this.yt_id = this.comp_id;
      this.$refs.playa.setId(this.yt_id);
      this.populate();
    },
    youtube_parser(url) {
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      var match = url.match(regExp);
      return match && match[7].length == 11 ? match[7] : false;
    },
    async populate() {
      const video_id = this.yt_id;
      console.log("getting from server " + video_id);
      const captions = await axios.get(`/api/captions/${video_id}`);
      if (captions.data) {
        this.captions = captions.data;
      }
    },
  },
};
</script>
<style scoped>
* {
  text-align: left;
}
a {
  text-decoration: none;
  padding-left:2em;
}
input {
  width: 40em;
}
</style>
