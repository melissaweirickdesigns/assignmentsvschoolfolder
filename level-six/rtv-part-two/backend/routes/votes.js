const express = require("express");
const votesRouter = express.Router();
const Issue = require('../models/issue.js');
const { expressjwt } = require("express-jwt");

votesRouter.post("/vote", expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), async (req, res) => {
    const { issueId, voteType } = req.body;
    const userId = req.auth._id; // Assuming this is how you get the user's ID from the JWT

    try {
        const issue = await Issue.findById(issueId);
        if (!issue) {
            return res.status(404).send({ message: "Issue not found" });
        }

        // Check if the user has already voted on this issue
        const hasVoted = issue.votes.some(vote => vote.voter.toString() === userId.toString());

        if (hasVoted) {
            // User has already voted, deny new vote
            return res.status(409).send({ message: "You have already voted on this issue." });
        } else {
            // User has not voted, add their vote
            issue.votes.push({ voter: userId, voteType: voteType });

            // Update vote counts based on the vote type
            if (voteType === 'upvote') {
                issue.upvotesCount += 1;
            } else if (voteType === 'downvote') {
                issue.downvotesCount += 1;
            } else {
                return res.status(400).send({ message: "Invalid vote type" });
            }

            // Save changes
            const updatedIssue = await issue.save();
            res.status(200).send(updatedIssue);
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = votesRouter;
