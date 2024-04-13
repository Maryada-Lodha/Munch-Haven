const express = require("express");
const router = express.Router();

router.get("/fooditems", async (req, res) => {
    try {
        res.send([fooditems, foodcategory])
    } catch (error) {
        console.log(error);
        res.send("Internal Server Error")
    }
});

module.exports = router;