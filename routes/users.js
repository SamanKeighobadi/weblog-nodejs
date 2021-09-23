const { Router } = require("express");

const router = new Router();

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
  console.log(req.body)
  res.redirect('/dashboard')
});

//@desc Register page
// @route POST /users/register
router.get("/register", (req, res) => {
  res.render("./Register/register", {
    title: "ثبت نام",
    path: "/register",
  });
});

//@desc Register page
// @route POST /users/register
router.post("/register", (req, res) => {
  console.log(req.body)
  res.redirect('/users/login')
});



module.exports = router;
