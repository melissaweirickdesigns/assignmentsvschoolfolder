const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('../models/bountySchema')

bountyRouter.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
    })

bountyRouter.get("/search/type", (req, res, next) => {
    Bounty.find({type: req.query.type }, (err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.put("/:bountyID", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyID },
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

bountyRouter.delete("/:bountyID", (req, res, next) => {
    Bounty.findOneAndDelete(
        {_id: req.params.bountyID },
        (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
    })
})
    

module.exports = bountyRouter