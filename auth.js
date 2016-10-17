'use strict';

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

const db = require(`./db/api`);
const passport = require(`passport`);
const GoogleStrategy = require(`passport-google-oauth`).OAuth2Strategy;

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.HOST}/auth/google/callback`
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    db.getUser(profile.id).then(function(id) {
      if (id) {
        return done(null, profile);
      } else {
        db.createUser(profile.id).then(function(id) {
          return done(null, profile);
        });
      }
    });
  }
));

// passport.use(new googleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: `${process.env.HOST}/auth/google/callback`
//   },
//   (accessToken, refreshToken, profile, done) => {
//     console.log(profile);
//     const prom = new Promise((res, rej) => {
//       db.getUser(profile.id)
//         .then((user) => {
//           if (user) {
//             res(user);
//           } else {
//             db.createUser(profile.id, profile.displayName)
//               .then((newUser) => res(newUser[0]))
//               .catch((err) => rej(err));
//           }
//         })
//         .catch((error) => rej(error));
//     });
//     prom.then((user) => {
//       profile.id = user.id;
//       done(null, {
//         id: profile.id,
//         displayName: profile.displayName,
//       });
//     });
//   }));


module.exports = {
  passport: passport
};
