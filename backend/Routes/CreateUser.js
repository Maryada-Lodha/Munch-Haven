const express = require("express");
const router = express.Router();
const User = require("../models/User")

router.post("/createuser", async (req, res) => {

    try {
        const { name, password, email, location } = req.body;

        const newUser = new User({
            name: name,
            password: password,
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