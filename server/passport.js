const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const passport = require('passport');
const db = require('./src/models');

module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
    },
    async function (accessToken, refreshToken, profile, cb) {
      if (profile?.id) {
        await db.User.findOrCreate({
          where: { id: profile.id },
          defaults: {
            id: profile?.id,
            email: profile?.emails[0].value,
            loginType: profile?.provider,
          },
        });
      }
      return cb(null, profile);
    }
  )
);
