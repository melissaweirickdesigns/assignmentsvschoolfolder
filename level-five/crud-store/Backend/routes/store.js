const express = require('express');
const storeRouter = express.Router();
const Item = require('../models/itemSchema')

storeRouter.route("/")
  .get(async (req, res, next) => {
    try {
      const items = await Item.find();
      return res.status(200).send(items);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Internal Server Error' });
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const newItem = new Item(req.body);
      const savedItem = await newItem.save();
      return res.status(201).send(savedItem);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Internal Server Error' });
      next(err);
    }
  });

storeRouter.get("/search/type", async (req, res, next) => {
  try {
    const items = await Item.find({ type: req.query.type }).exec();
    return res.status(200).send(items);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal Server Error' });
    next(err);
  }
});

storeRouter.put("/:itemID", async (req, res, next) => {
  try {
    const updatedItem = await Item.findOneAndUpdate(
      { _id: req.params.itemID },
      req.body,
      { new: true }
    ).exec();
    return res.status(201).send(updatedItem);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal Server Error' });
    next(err);
  }
});

storeRouter.delete("/:itemID", async (req, res, next) => {
  try {
    const deletedItem = await Item.findOneAndDelete({ _id: req.params.itemID }).exec();
    return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal Server Error' });
    next(err);
  }
});

module.exports = storeRouter;
