const express = require("express");
const commentsRouter = express.Router();
const Issue = require('../models/issue.js');
const Comment = require('../models/comment.js'); // Correctly imported Comment model


commentsRouter.get('/', async (req, res) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(200).send(comments)
    })
});


// Get comments for a specific issue
commentsRouter.get('/:issueId', async (req, res, next) => {
    try {
        const issueId = req.params.issueId;
        const comments = await Comment.find({ issue: issueId });
        res.status(200).send(comments);
    } catch (error) {
        console.error(error);
        next(error); // Forward to error handling middleware
    }
});


// Post a new comment for an issue
commentsRouter.post("/:issueId", async (req, res) => {
    const { issueId } = req.params;
    const { content, userId } = req.body;

    try {
        const issue = await Issue.findById(issueId);
        if (!issue) {
            return res.status(404).send({ message: "Issue not found" });
        }

        const newComment = new Comment({ content, user: userId, issue: issueId });
        const savedComment = await newComment.save();

        // Increment the comment count
        issue.commentsCount = issue.commentsCount + 1;

        issue.comments.push(savedComment._id);
        await issue.save();

        res.status(201).send(savedComment);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


// Get a specific comment by ID
commentsRouter.get("/:issueId/:commentId", async (req, res) => {
    try {
        const { commentId } = req.params;
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).send({ message: "Comment not found" });
        }
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Update a specific comment by ID
commentsRouter.put("/:issueId/:commentId", async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content } = req.body;

        const updatedComment = await Comment.findByIdAndUpdate(commentId, { content }, { new: true });
        if (!updatedComment) {
            return res.status(404).send({ message: "Comment not found" });
        }
        res.status(200).send(updatedComment);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = commentsRouter;
