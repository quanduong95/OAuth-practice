import express from 'express';
import cors from 'cors';
import connectDb from './src/config/connectDb.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
await connectDb();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', (req, res) => {
  res.send('App is running');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
