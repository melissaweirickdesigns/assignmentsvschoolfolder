const express = require('express')
const newsletterRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const newsletter = [
    {email: "joe@snh.com", fName: "joe", optOut: false},
    {email: "moe@snh.com", fName: "Moe", optOut: false},
    {email: "shmoe@snh.com", fName: "Shmoe", optOut: false},
    {email: "jill@snh.com", fName: "jill", optOut: false},
    {email: "bill@snh.com", fName: "bill", optOut: false}
]

newsletterRouter.route("/")
    .get((req, res) => {
        res.send(newsletter)
    })
    .post((req, res) => {
        const newNewsletter = req.body
        newNewsletter._id = uuidv4()
        users.push(newNewsletter)
        res.send(`Successfully added ${newUser.fName} to the Newsletter List`)
    })




module.exports = newsletterRouter