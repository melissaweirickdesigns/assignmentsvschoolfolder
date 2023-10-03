const express = require("express")
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:3000/'
  }))
app.use("/bounty", require("./routes/bounty.js"))
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
