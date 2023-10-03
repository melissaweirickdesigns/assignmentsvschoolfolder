const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
const bounty = require("./bountyData");

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounty)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounty.push(newBounty)
        res.status(200).send("bounty added to list")
    })

bountyRouter.put("/:bountyID", (req, res) => {
    const bountyID = req.params.bountyID
    const bountyIndex = bounty.findIndex(bountys => bountys._id === bountyID)
    const updatedBounty = Object.assign(bounty[bountyIndex], req.body)
    res.send(updatedBounty)
})

bountyRouter.delete("/:bountyID", (req, res, next) => {
    const bountyID = req.params.bountyID
    const bountyIndex = bounty.findIndex(bountys => bountys._id === bountyID)
    bounty.splice(bountyIndex, 1)
    res.send("successfully deleted bounty")
})
    

module.exports = bountyRouter