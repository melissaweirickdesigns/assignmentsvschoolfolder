const express = require('express')
const userRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const users = [
    {name: "joe", age: "5", _id: uuidv4()},
    {name: "Moe", age: "6", _id: uuidv4()},
    {name: "Shmoe", age: "7", _id: uuidv4()},
    {name: "Jill", age: "8", _id: uuidv4()},
    {name: "Bill", age: "9", _id: uuidv4()},
]

userRouter.route("/")
    .get((req, res) => {
        res.send(users)
    })
    .post((req, res) => {
        const newUser = req.body
        newUser._id = uuidv4()
        users.push(newUser)
        res.send(`Successfully added ${newUser.name} as a user`)
    })


module.exports = userRouter