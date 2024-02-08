const express = require("express")
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 9000;
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:3000'
  }))
mongoose.set('strictQuery', true)
mongoose.set('debug', true)

mongoose.connect('mongodb+srv://mjdallas5:****@cluster0.0foysi0.mongodb.net/login')
    .then(() => console.log("Connected to database"))
    .catch(err => console.error("Could not connect to database", err));

app.use("/login", require("./routes/login"))
app.use(express.static(path.join(__dirname, '../client/public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });
app.get('/health-check', (req, res) => {
    res.send('Server is healthy!'); 
});

app.listen(PORT, () => {
    console.log("The Server is running in Port", PORT)
})
