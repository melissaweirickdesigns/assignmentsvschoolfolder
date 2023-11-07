const express = require("express")
const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://mjdallas5:****"
const morgan = require('morgan')
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 9001;
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:3000'
  }))
mongoose.set('strictQuery', true)
mongoose.set('debug', true)

async function connectToDatabase() {
  try {
    await mongoose.connect(`${mongoURI}@cluster0.0foysi0.mongodb.net/store`);
    console.log("Connected to database");
  } catch (err) {
    console.error("Error connecting to database", err);
  }
}

connectToDatabase();
app.use("/store", require("./routes/store"))
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
app.get('/health-check', (req, res) => {
    res.send('Server is healthy!');
});

app.listen(PORT, () => {
    console.log("The Server is running in Port", PORT)
})
