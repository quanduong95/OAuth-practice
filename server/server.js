const express = require('express');
const cors = require('cors');
const connectDb = require('./src/config/connectDb.js');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./src/routes/auth.js');
const passport = require('./passport.js');

const app = express();
connectDb();

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
