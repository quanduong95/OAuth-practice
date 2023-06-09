import express from 'express';
import cors from 'cors';
import connectDb from './src/config/connectDb.js';
import dotenv from 'dotenv';
dotenv.config();
import router from './src/routes/auth.js';
import passport from './passport.js';

const app = express();
await connectDb();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', router);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
