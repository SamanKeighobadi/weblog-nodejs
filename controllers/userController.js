const User = require("../models/User");

exports.login = async (req, res) => {
  try {
    res.render("./Login/login", {
      title: "ورود",
      path: "/login",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.registerUser = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.CreateUser = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
