const express = require("express");
const bcrypt = require("bcrypt")
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = require("../models/User")

router.post("/validateuser", async (req, res) => {
    
    const {email, password} = req.body
    // salt =await bcrypt.genSalt(10);
    // secure_password = await bcrypt.hash(password, salt)
    // console.log(secure_password);

    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "Invalid Email" })
        }

        compare_password = await bcrypt.compare(password, userData.password)

        if (!compare_password) {
            return res.status(400).json({ errors: "Invalid Password" })
        }

        const data = {
            user: {
                id: userData.id
            }
        }

        const jwt_secret = crypto.randomBytes(32).toString('hex');
        const authToken = jwt.sign(data, jwt_secret);

        res.json({ success: true, authToken: authToken })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false })
    }
});

module.exports = router;