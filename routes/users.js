const { Router } = require("express");

const User = require("../models/User");

const router = new Router();

const {
  registerValidation,
  loginValidation,
} = require("../validation/usersValidation");

// @desct Login page
// @route : GET /users/login
router.get("/login", (req, res) => {
  res.render("./Login/login", {
    title: "ورود",
    path: "/login",
  });
});

//@desc Register page
// @route GET /users/register
router.get("/register", (req, res) => {
  res.render("./Register/register", {
    title: "ثبت نام",
    path: "/register",
  });
});

// @desct Login page handler
// @route : POST /users/login
router.post("/login", (req, res) => {
  loginValidation
    .validate(req.body)
    .then((result) => {
      console.log(result);
      res.redirect("/dashboard");
    })
    .catch((err) => {
      console.log(err.errors);
      res.render("./Login/login", {
        title: "ورود",
        path: "/login",
        errors: err.errors,
      });
    });
});

//@desc Register page
// @route POST /users/register
router.post("/register", async (req, res) => {
  try {
    await User.userValidation(req.body);
    // await User.create(req.body)
    res.redirect("/users/login");
  } catch (err) {
    console.log(err);
    const errors = [];
    err.inner.forEach((error) => {
      errors.push({
        name: error.path,
        message: error.message,
      });
    });
    return res.render("./Register/register", {
      title: "ثبت نام کاربر",
      path: "register",
      errors,
    });
  }
});

module.exports = router;
