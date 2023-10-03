const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, '../client/build')));
app.use("/bounty", require("./routes/bounty.js"))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.listen(8999, () => {
    console.log("The Server is running in Port 8999")
})
