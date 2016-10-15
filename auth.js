'use strict';

const db = require(`./db/api`);
const passport = require(`passport`);
const googleStrategy = require(`passport-google-oauth`).OAuth2Strategy;
require(`dotenv`).config();

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new googleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:1337/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    if (id) {
      return done(null, profile)
    } else {
      db.createUser(profile.id).then((id) => {
        return done(null, profile);
      });
    }
  }
));

module.exports = {
  passport: passport
};
