const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/munch-haven";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
        console.log("---Connected to the MongoDB Database---");
        
        // Fetch Food Items from Database
        
        global.fooditems = await mongoose.connection.db.collection("food-items").find({}).toArray()
        global.foodcategory = await mongoose.connection.db.collection("food-category").find({}).toArray()

    } catch (error) {
        console.log("---Error occurred while connecting to the MongoDb Database---", error);
    }
}

module.exports = connectToMongoDB;
