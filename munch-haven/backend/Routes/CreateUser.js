const express = require("express");
const router = express.Router();
const User = require("../models/User")

router.post("/createuser", async (req, res) => {
    try {
        await User.create({
            name: "Shyam Das",
            password: "123456",
            email: "shyamdas@gmail.com",
            location: "Chembur"
        })
        res.json({ success: true });
    } 
    catch (error) {
        console.log(error);
        res.json({ success: false });
    };
})

module.exports = router;