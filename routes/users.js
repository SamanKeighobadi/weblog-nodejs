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

//@desc Register page
// @route POST /users/register
router.get("/register", (req, res) => {
  res.render("./Register/register", {
    title: "ثبت نام",
    path: "/register",
  });
});

module.exports = router;
