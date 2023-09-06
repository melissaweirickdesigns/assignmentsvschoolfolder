const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())
app.use("/roomsupplies", require("./routes/roomsupplies.js"))

app.listen(9000, () => {
    console.log("The Server is running in Port 9000")
})