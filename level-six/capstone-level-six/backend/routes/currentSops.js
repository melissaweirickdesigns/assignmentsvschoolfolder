const express = require("express")
const currentSopRouter = express.Router()
const Sopdocs = require('../models/sopdocs.js')
const {expressjwt} = require('express-jwt')

// Get All SOPS
currentSopRouter.get("/", (req, res, next) => {
  Sopdocs.find((err, sops) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(sops)
  })
})

// Get One SOP
currentSopRouter.get("/:sopId", (req, res, next) => {
  Sopdocs.find((err, sops) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(sops)
  })
})



// Get SOP by User id
currentSopRouter.get("/posts/:userId", expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), (req, res, next) => {
  Sopdocs.find({ createdBy: req.params.userId }, (err, sops) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      res.status(200).json(sops);
  });
});


// Add new SOP
currentSopRouter.post("/", (req, res, next) => {
  const newSop = new Sopdocs({
      ...req.body,
      createdBy: req.auth._id // Set createdBy to the user ID from the token
  });

  newSop.save((err, savedSop) => {
      if(err){
          res.status(500);
          return next(err);
      }
      return res.status(201).send(savedSop);
  });
});

// Delete SOP
currentSopRouter.delete("/:sopId", expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), (req, res, next) => {
  const { sopId } = req.params;

  Sopdocs.findOneAndDelete({ _id: sopId, createdBy: req.auth._id }, (err, deletedSop) => {
      if (err) {
          res.status(500).send({ message: "Failed to delete the SOP" });
          return next(err);
      }
      if (!deletedSop) {
          return res.status(404).send({ message: "SOP not found or user not authorized to delete this SOP" });
      }

      return res.status(200).send({ message: "Successfully deleted SOP", sop: deletedSop });
  });
});


// Update SOP
currentSopRouter.put("/:sopId", (req, res, next) => {
  Sopdocs.findOneAndUpdate(
    { _id: req.params.sopId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedSop) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedSop)
    }
  )
})

module.exports = currentSopRouter