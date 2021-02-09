const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Api = require("./routes/categories");
const port = process.env.PORT || 5000;
const user = require("./routes/auth");
const newpost = require('./routes/post')
const health = require("./routes/health");
const categoryPosts = require("./routes/category");

const InitiateMongoServer = require("./auth/db");
const category = require("./model/category");

let app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
InitiateMongoServer();

require('./model/posts')

app.use("/", user);
app.use("/", health);
app.use("/api", Api);
app.use("/", newpost);
// app.use("/api", posts);
// app.use("/blog", post);
app.use("/api", categoryPosts);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`app is running on port ${port}`);
});
