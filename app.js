const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

mongoose
  .connect("mongodb+srv://entertainmentresolution9:E5nQcj03XlJ8DCkH@cluster0.0b4brj9.mongodb.net/LNDB")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));


const session = require("express-session");
app.use(
  session({
    secret: "krishna",
    resave: false,
    saveUninitialized: false,
  })
);

const User = require("./model/user");
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate); 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); 

const productrouts = require("./route/productroute");
app.use(productrouts);

const authroute = require("./route/auth");
app.use(authroute);

const port = 5001;

app.listen(port, () => {
  console.log(`conncted at ${port}`);
});
