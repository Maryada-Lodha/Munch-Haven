const mongoose = require("mongoose")
const mongoURL = "mongodb+srv://maryadalodha94:deebond_8023@cluster0.hwjpvas.mongodb.net/munch-haven?retryWrites=true&w=majority"
const connectToMongoDB = async () => {
    if (mongoose.connect(mongoURL, { useNewUrlParser: true })) {
        console.log("---Connected to the MongoDB Database---");
    }
    else{
        console.log("---Error occurred while connecting to the MongoDb Database---");
    }

    // const fetched_data = mongoose.connection.db.collection("food-items");
    // fetched_data.find({}).toArray(function (err, data) {
    //     if (err) {
    //         console.log("Error occurred while fetching all the data", err);
    //     }
    //     else {
    //         console.log(data);
    //     }
    // });
} 

module.exports = connectToMongoDB;
