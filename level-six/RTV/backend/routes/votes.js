const express = require("express");
const votesRouter = express.Router();
const Issue = require('../models/issue.js');

votesRouter.post("/vote", async (req, res) => {
    const { issueId, voteType } = req.body;

    try {
        const issue = await Issue.findById(issueId);
        if (!issue) {
            return res.status(404).send({ message: "Issue not found" });
        }

        if (voteType === 'upvote') {
            issue.upvotesCount += 1;
        } else if (voteType === 'downvote') {
            issue.downvotesCount += 1;
        } else {
            return res.status(400).send({ message: "Invalid vote type" });
        }

        const updatedIssue = await issue.save();
        res.status(200).send(updatedIssue);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = votesRouter;
