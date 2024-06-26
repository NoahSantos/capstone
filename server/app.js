const express = require('express');
const session = require ('express-session');
const morgan = require('morgan');
const passport = require('passport');
// tells where the passport LocalStrategy is
require('./config/passport')(passport);
// allows the use of .env variables
require('dotenv').config({ path: './server/.env' });

const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const connectDB = require("./db/connect");

let userRoute = require('./routes/user-route')
let eventRoute = require('./routes/event-route')
let animalRoute = require('./routes/animal-route')
let tokenRoute = require('./routes/token-route')
app.use(express.json());

app.use("/users", userRoute);
app.use("/animals", animalRoute);
app.use("/events", eventRoute);
app.use("/tokens", tokenRoute);

// development tools
app.use(morgan('tiny'));
// body parser
// determines the data format
app.use(express.urlencoded({extended: false}));
// express session
app.use(session({
    // session sectret is hashed on serialize
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// connects the mongodb database to the project
// this means that the connection is the first thing to happen
// makes it so that we don't have to use the connection string when calling models
// process.env tells the code to look in the env to find the variable
const initServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};
initServer();