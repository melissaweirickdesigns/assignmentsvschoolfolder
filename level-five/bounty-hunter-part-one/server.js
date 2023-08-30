const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())
app.use("/bounty", require("./routes/bounty.js"))

app.listen(9000, () => {
    console.log("The Server is running in Port 9000")
})
