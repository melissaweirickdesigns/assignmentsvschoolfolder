const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const user = require('../models/user.js')

authRouter.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(400).json({ message: "Username is already in use" });
        }
                
        const newUser = new User({ 
            username: username, 
            password: password,
            fName: req.body.fName,
            lName: req.body.lName,
            phoneNumber: req.body.phoneNumber,
            wEmail: req.body.wEmail
        });
        
        const savedUser = await newUser.save();
        const userWithoutPassword = savedUser.withoutPassword();
        const token = jwt.sign({ _id: userWithoutPassword._id }, process.env.SECRET, { expiresIn: '1h' });
        console.log(userWithoutPassword)
        res.status(201).json({ token, user: userWithoutPassword });

    } catch (error) {
        res.status(500).json({ message: "Error in creating user", error: error.message });
    }
});

authRouter.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(403).json({ message: "Username or Password are incorrect" });
        }
        user.checkPassword(password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: "An error occurred during login", error: err.message });
            }
            if (!isMatch) {
                return res.status(403).json({ message: "Username or Password are incorrect" });
            }
            const userWithoutPassword = user.withoutPassword();
            const token = jwt.sign({ _id: userWithoutPassword._id }, process.env.SECRET, { expiresIn: '1h' });
            res.status(200).json({ token, user: userWithoutPassword });
        });
    } catch (error) {
        res.status(500).json({ message: "An error occurred during login", error: error.message });
    }
});

module.exports = authRouter;