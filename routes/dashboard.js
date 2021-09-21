const { Router } = require("express");

const router = new Router();

// @desct Login page 
// http method : GET /login
router.get("/login", (req, res) => {
  res.render("./Login/login", {
    title: "Login Page",
    path: "/login",
  });
});

module.exports = router;
