const express = require("express");
const router = express.Router();
const User = require("../models/User")

router.post("/validateuser", async (req, res) => {
    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "Invalid Credentials" })
        }

        if (req.body.password !== userData.password) {
            return res.status(400).json({ errors: "Invalid Credentials" })
        }

        res.json({ success: true })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false })
    }
});

module.exports = router;