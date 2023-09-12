const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())
app.use("/bounty", require("./routes/bounty.js"))

app.listen(8999, () => {
    console.log("The Server is running in Port 8999")
})
