const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.login = (req, res) => {
  res.render("./Login/login", {
    title: "ورود",
    path: "/login",
    message:req.flash('success_msg')
  });
};

exports.register = async (req, res) => {
  try {
    res.render("./Register/register", {
      title: "ثبت نام",
      path: "/register",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.CreateUser = async (req, res) => {
  const errors = [];

  try {
    // check if user already exist
    await User.userValidation(req.body);
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      errors.push({ message: "کاربری با این ایمیل وجود دارد" });
      return res.render("./Register/register", {
        title: "ثبت نام کاربر",
        path: "/register",
        errors,
      });
    }

    // Hashing password
    const hash = await bcrypt.hash(password, 10);
    await User.create({ fullname, email, password: hash });
    req.flash('success_msg',"ثبت نام با موفقیت انجام شد !")
    res.redirect("/users/login");
  } catch (err) {
    console.log(err);
    err.inner.forEach((error) => {
      errors.push({
        name: error.path,
        message: error.message,
      });
    });
    return res.render("./Register/register", {
      title: "ثبت نام کاربر",
      path: "/register",
      errors,
    });
  }
};

exports.loginUser = async (req, res) => {
  const errors = [];

  try {
    await User.loginValidation(req.body);
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    err.inner.forEach((error) => {
      errors.push({
        name: error.path,
        message: error.message,
      });
    });
    return res.render("./Login/login", {
      title: "صفحه ورد",
      path: "/login",
      errors,
    });
  }
};
