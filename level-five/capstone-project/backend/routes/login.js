const express = require("express")
const userRouter = express.Router()
const User = require('../models/userSchema')

const bcrypt = require('bcrypt'); 

userRouter.post("/", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).send('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        res.status(200).send('Login successful');
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

userRouter.post("/add", async (req, res, next) => {
    try {
        const { fName, lName, employeeId, locationId, username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fName,
            lName,
            employeeId,
            locationId,
            username,
            password: hashedPassword,
            loginStatus: false
        });

        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500);
        return next(err);
    }
    
});

userRouter.get("/users", async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
        return next(err);
    }
});

userRouter.delete('/users/:id', async (req, res, next) => {
    try {
        const userId = req.params.id;
        await User.findOneAndDelete({ _id: userId });
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
        return next(err);
    }
});

userRouter.put('/users/:id', async (req, res, next) => {
    try {
        const userId = req.params.id;
        const update = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, update, { new: true });
        res.status(200).send(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
        return next(err);
    }
});

    

module.exports = userRouter