const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid');

app.use(express.json())
uuidv4()

app.use("/users", require("./routes/userRouter.js"))
app.use("/newsletter", require("./routes/newsletterRouter.js"))

app.listen(9000, () => {
    console.log("The Server is running on Port 9000")
})