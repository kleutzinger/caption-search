const {
  YoutubeCaption,
  getSubtitles,
  getSubtitlesContent,
} = require("@drorgl/youtube-captions-scraper");

async function get(id) {

  let youtubeCaptions = new YoutubeCaption(id /*youtube video id*/);
  console.log(youtubeCaptions);
  let captionTracks = await youtubeCaptions.getCaptionTracks();
  //retrieve subtitles by language
  let subtitles = await youtubeCaptions.getSubtitles(
    "en" /*optional language*/
  );

  console.log(captionTracks)
  console.log(subtitles)
}

get("wNpjGvJwyL8");
//Get Subtitles for Video
/*
getSubtitles({
  videoID: 'wNpjGvJwyL8"', // youtube video id
  lang: 'en' // default: `en`
}).then(captions => {
  console.log(captions);
});
*/
