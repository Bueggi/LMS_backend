const Express = require("express");
const app = Express();
const env = require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("🚀🚀🚀 Server up and running");
});
