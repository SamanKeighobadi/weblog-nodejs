
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const passport = require("passport");
const dotEnv = require("dotenv");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");

const Database = require("./config/db");
const { Statics } = require("./utils/statics");

const userRoutes = require("./routes/users");
const dashboardRoutes = require("./routes/dashboard");
const indexRoute = require("./routes/index");

//? Config
dotEnv.config();

//? passport configuration
require("./config/auth");

//? Connect to databse
Database();

const app = express();

//?
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.urlencoded({ extended: false }));
//? Session
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 6000 },
    resave: false,
    saveUninitialized: false,
  })
);

//? Passport.js initalize
app.use(passport.initialize());
app.use(passport.session());

//? Flahs
app.use(flash());

//? View Engine
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("layout", "./layouts/mainLayout");
app.set("views", "views");

//? Staticst
Statics(app);

//? Routes
app.use(indexRoute);
app.use("/dashboard", dashboardRoutes);
app.use("/users", userRoutes);

//? 404 Page
app.use((req, res) => {
  res.render("404", {
    title: "صفحه مورد نظر یافت نشد",
    path: "/404",
  });
});

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Server run in ${process.env.NODE_ENV} mode port ${PORT}`)
);
