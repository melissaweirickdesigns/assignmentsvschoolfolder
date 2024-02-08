const express = require("express")
const currentIssuesRouter = express.Router()
const Issue = require('../models/issue.js')

// Get All Todos
currentIssuesRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// Get One Issue
currentIssuesRouter.get("/:issueId", (req, res, next) => {
  Issue.find((err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})



// Get todos by User id
currentIssuesRouter.get("/", (req, res, next) => {
  Issue.find({ user: req.user._id }, (err, issues) => { // Filter by user ID
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})


// Add new Todo
currentIssuesRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})

// Delete Todo
currentIssuesRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully Deleted Issue: ${deletedIssue.title}`)
    }
  )
})

// Update Todo
currentIssuesRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

module.exports = currentIssuesRouter