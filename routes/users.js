const { Router } = require("express");

const router = new Router();

const registerValidation = require('../validation/registerValidation');
const loginValidatoin = require('../validation/loginValidation');

// @desct Login page
// @route : GET /users/login
router.get("/login", (req, res) => {
  res.render("./Login/login", {
    title: "Login Page",
    path: "/login",
  });
});

// @desct Login page handler
// @route : POST /users/login
router.post("/login", (req, res) => {
  loginValidatoin.validate(req.body).then(result => {
    console.log(result)
    res.redirect('/dashboard')

  }).catch(err => {
    console.log(err)
    res.send("Error")
  })
});

//@desc Register page
// @route GET /users/register
router.get("/register", (req, res) => {
  res.render("./Register/register", {
    title: "ثبت نام",
    path: "/register",
  });
});

//@desc Register page
// @route POST /users/register
router.post("/register", (req, res) => {
  registerValidation.validate(req.body).then(result => {
    console.log(result)
    res.redirect('/users/login')
  }).catch(err => {
    console.log(err)
    res.send("error baby")
  })
});



module.exports = router;
