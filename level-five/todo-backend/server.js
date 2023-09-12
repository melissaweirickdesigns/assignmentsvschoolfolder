const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())
app.use("/toDos", require("./routes/toDos.js"))

app.listen(8996, () => {
    console.log("The Server is running in Port 8999")
})
