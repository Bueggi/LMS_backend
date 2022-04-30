// ENVIRONMENt VARIABLES
require("dotenv").config();
// CREATING EXPRESS APP
const Express = require("express");
const app = Express();
// IMPORT FOR FILESYStEM AND PASSPORT
const fs = require("fs");
require("./utils/passport");

//// ADDING ROUTES TO THE SERVER
fs.readdirSync("./routes").map((route) => {
  app.use("/api", require(`./routes/${route}`));
});

// STARTING SERVER
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("🚀🚀🚀 Server up and running");
});
