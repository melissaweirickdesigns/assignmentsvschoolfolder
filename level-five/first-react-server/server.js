const express = require("express")
const app = express()

app.use(express.json())

const users = [
    {name: "joe", age: "5"},
    {name: "Moe", age: "6"},
    {name: "Shmoe", age: "7"},
    {name: "Jill", age: "8"},
    {name: "Bill", age: "9"},
]

app.get("/users", (req, res) => {
    res.send(users)
})

app.post("/users", (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.send(`Successfully added ${newUser.name} as a user`)
})

app.listen(9000, () => {
    console.log("Registration Submitted")
})