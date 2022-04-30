const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

///// MIDDLEWARES /////
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log({ accessToken, refreshToken, profile });
    }
  )
);
