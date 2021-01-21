const routes = require("express").Router();
const {
  YoutubeCaption,
  getSubtitles,
  getSubtitlesContent,
} = require("@drorgl/youtube-captions-scraper");

routes.get("/captions/:id", async (req, res, next) => {
  try {
    let youtubeCaptions = new YoutubeCaption(
      req.params.id /*youtube video id*/
    );
    let subtitles = await youtubeCaptions.getSubtitles(
      "en" /*optional language*/
    );
    res.status(200).json(subtitles);
  } catch (error) {
    next(error);
  }
});

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});
module.exports = routes;
