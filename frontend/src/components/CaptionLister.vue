<template>
  <div>
    <h5>Click a time to jump to that point. Ctrl+f to search.</h5>
    <YoutubePlayer ref="playa" />
    <b-form @submit.prevent="handleSubmit" inline>
      <b-button type="submit" variant="dark">Set New Video</b-button>
      <b-form-input
        class="w-50 margin-xs"
        ref="form_video_id"
        v-model="input_val"
      ></b-form-input>
    </b-form>

    <div v-if="captions">
      <div class="table-container" style="max-height: 30vh; overflow: scroll">
        <b-table
          class="table-sm margin-xs"
          @row-clicked="rowClick"
          striped
          fixed
          v-bind:outlined="false"
          :fields="table_fields"
          :items="table_data"
        ></b-table>
      </div>
    </div>
    <div v-if="!captions">
      <b-card title="No Captions">
        <b-card-text>
          <a @click.prevent="example" href="#" class="card-link"
            >Try this example?</a
          >
        </b-card-text>
      </b-card>
    </div>
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
      table_fields: [
        { key: "text", label: "Subtitle" },
        {
          key: "start",
          label: "Timestamp",
          formatter: (v) => {
            return new Date(Math.floor(v) * 1000).toISOString().substr(11, 8);
          },
        },
      ],
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
    table_data: function () {
      return this.captions;
    },
  },
  methods: {
    to_href,
    example() {
      this.input_val = "https://youtube.com/watch?v=-OXhMc0wpes";
      this.handleSubmit();
    },
    rowClick(record, index) {
      console.log(index, "row clicked");
      console.log(record);
      this.handleTimeClick(this.captions[index].start);
    },
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
  padding-left: 2em;
}
.table-container {
  max-height: 30vh;
  overflow-y: scroll;
  margin-top: 10px;
}
</style>
