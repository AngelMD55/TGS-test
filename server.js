require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");

//passport config
require("./config/passport")(passport);

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Serve up static assets
if (process.env.Node_ENV === "production") {
    app.use(express.static("client/build"));
};

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//API routes
app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "./client/public/index.html"));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/TGS-test", {useNewUrlParser: true});

app.listen(PORT, () => {
    console.log("server listening on http://localhost:" + PORT);
})