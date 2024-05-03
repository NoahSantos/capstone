const mongoose = require("mongoose");

const connectDB = (url) => {
    console.log(url);
    return mongoose.connect(url).
    then(() => {
        console.log("database connected successfully")
    }).
    catch((err) => console.log(err));
}

module.exports = connectDB;