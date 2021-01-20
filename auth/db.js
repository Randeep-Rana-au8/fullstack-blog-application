const mongoose = require("mongoose");
const fs = require("fs");
const mongoURI = "mongodb://localhost:27017/capstone";

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(mongoURI, {useNewUrlParser: true}, { useUnifiedTopology: true });        
        console.log("connected to DB !!")
    } catch(e) {
        console.log(e);
        throw e;
    }
}

module.exports = InitiateMongoServer;