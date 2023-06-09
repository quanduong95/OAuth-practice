import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
import passport from 'passport';

export default passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'api/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);
