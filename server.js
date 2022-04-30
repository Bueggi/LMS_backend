const Express = require("express");
const app = Express();
const env = require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const port = process.env.PORT || 5000;

///// MIDDLEWARES /////
passport.use(new GoogleStrategy());

app.listen(port, () => {
  console.log("🚀🚀🚀 Server up and running");
});
