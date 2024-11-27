const mongoose = require("mongoose");
async function ConnectDB() {
    try {
        await mongoose.connect(process.env.URL);
        console.log("Connected to database successfully")
    }
    catch (error) {
        console.log("Error connecting to database");
    }

}
module.exports = ConnectDB;