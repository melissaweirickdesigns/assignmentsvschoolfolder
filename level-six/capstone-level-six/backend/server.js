const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 9000;

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:3000'
  }))
mongoose.set('strictQuery', true)
mongoose.set('debug', true)

mongoose.connect(`mongodb+srv://apiconnection:${process.env.MONGODB}@cluster0.nz7pigu.mongodb.net/auth`)
  .then(() => console.log("Connected to database"))
    .catch(err => console.error("Could not connect to database", err));

app.use('/auth', require('./routes/authRouter.js'))
// app.use('/signup', require('./routes/authRouter.js'))
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/currentsops', require('./routes/currentSops.js'))
app.use('/api/addnewsop', require('./routes/currentSops.js'))
app.use('/api/myposts', require('./routes/currentSops.js'))

app.use((err, req, res, next) => {
  console.error(err); // Log the error
  if (err.status) {
      res.status(err.status).send({ message: err.message });
  } else {
      res.status(500).send({ message: "An internal server error occurred" });
  }
});

app.listen(PORT, () => {
    console.log("The Server is running in Port", PORT)
})