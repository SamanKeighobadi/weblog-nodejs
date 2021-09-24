const express = require("express");

const router = express.Router();

// @desc Weblog index page
// http method : GET /
router.get("/", (req, res) => {
  res.render("index", {
    title: "Weblog",
    path: "/",
  });
});



module.exports = router;
