const { Router } = require("express");

const router = new Router();

router.get("/login", (req, res) => {
  res.render("./Login/login", {
    title: "Login Page",
    path: "/login",
  });
});

module.exports = router;
