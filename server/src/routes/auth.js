import passport from 'passport';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { loginSuccess } from '../controllers/authController.js';

const router = express.Router();
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile'], session: false })
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

export default router;
