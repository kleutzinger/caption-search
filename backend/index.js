// server/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;
const api_routes = require("./api");
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api_routes);
app.use("/", express.static("dist"));

// listen on the port
console.log(`Hi! http://localhost:${port}`);
app.listen(port);
