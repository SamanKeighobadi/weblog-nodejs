const { Router } = require("express");

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
router.post("/register", (req, res) => {
  registerValidation
    .validate(req.body)
    .then((result) => {
      console.log(result);
      res.redirect("/users/login");
    })
    .catch((err) => {
      console.log(err.errors);
      res.render("./Register/register", {
        title: "ثبت نام",
        path: "/register",
        errors: err.errors,
      });
    });
});

module.exports = router;
