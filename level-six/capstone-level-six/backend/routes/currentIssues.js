const express = require("express")
const currentIssuesRouter = express.Router()
const {expressjwt} = require('express-jwt')

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



// Get issues by User id
currentIssuesRouter.get("/posts/:userId", expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), (req, res, next) => {
  Issue.find({ createdBy: req.params.userId }, (err, issues) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      res.status(200).json(issues);
  });
});


// Add new issue
currentIssuesRouter.post("/", (req, res, next) => {
  const newIssue = new Issue({
      ...req.body,
      createdBy: req.auth._id // Set createdBy to the user ID from the token
  });

  newIssue.save((err, savedIssue) => {
      if(err){
          res.status(500);
          return next(err);
      }
      return res.status(201).send(savedIssue);
  });
});

// Delete issue and comments associated with it
currentIssuesRouter.delete("/:issueId", expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), (req, res, next) => {
  const { issueId } = req.params;

  Comment.deleteMany({ issue: issueId }, (err) => {
      if (err) {
          res.status(500).send({ message: "Failed to delete comments" });
          return next(err);
      }

      Issue.findOneAndDelete({ _id: issueId, createdBy: req.auth._id }, (err, deletedIssue) => {
          if (err) {
              res.status(500).send({ message: "Failed to delete the issue" });
              return next(err);
          }
          if (!deletedIssue) {
              return res.status(404).send({ message: "Issue not found or user not authorized to delete this issue" });
          }
          return res.status(200).send({ message: `Successfully deleted issue and its comments`, issue: deletedIssue });
      });
  });
});

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