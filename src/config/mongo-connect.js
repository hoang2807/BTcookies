const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "Mongo";

const connect = async() => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        console.log("MongoDB connected!!");
    } catch (err) {
        console.log("Failed to connect to MongoDB", err);
    }
};

module.exports = connect;