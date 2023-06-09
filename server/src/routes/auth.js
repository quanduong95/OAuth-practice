const router = require('express').Router();
const passport = require('passport');
require('dotenv').config();
const loginSuccess = require('../controllers/authController');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })
);

router.get(
  '/google/callback',
  (req, res, next) => {
    passport.authenticate('google', (err, profile) => {
      req.user = profile;
      next();
    })(req, res, next);
  },
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/login-success/${req.user?.id}`);
  }
);

router.post('/login-success', loginSuccess);

module.exports = router;
