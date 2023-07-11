const express = require("express")
const app = express()

app.get("/registration", (req, res) => {
    res.send({name: "Joe", age:"26"})
})

app.listen(9000, () => {
    console.log("The Registration was submitted")
})