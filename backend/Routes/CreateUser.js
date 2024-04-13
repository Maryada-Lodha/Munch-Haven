const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {

    try {
        const { name, password, email, location } = req.body;

        const salt = await bcrypt.genSalt(10);
        const secure_password = await bcrypt.hash(password, salt)

        const newUser = new User({
            name: name,
            password: secure_password,
            email: email,
            location: location
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser, success: true });
    } catch (error) {

        console.error("Error occurred while creating user:", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }

})

module.exports = router;