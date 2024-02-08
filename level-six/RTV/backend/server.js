const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 9002;

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:3000'
  }))
mongoose.set('strictQuery', true)
mongoose.set('debug', true)

mongoose.connect(`mongodb+srv://mjdallas5:${process.env.MONGODB}@cluster0.0foysi0.mongodb.net/auth`)
  .then(() => console.log("Connected to database"))
    .catch(err => console.error("Could not connect to database", err));

app.use('/auth', require('./routes/authRouter.js'))
app.use('/signup', require('./routes/authRouter.js'))
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/currentissues', require('./routes/currentIssues.js'))
app.use('/api/issues', require('./routes/currentIssues.js'))
app.use('/api/votes', require('./routes/votes'))
app.use('/api/comments', require('./routes/comments'))
app.use('/api/currentissues/:issueId/comments', require('./routes/comments'));



app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log("The Server is running in Port", PORT)
})