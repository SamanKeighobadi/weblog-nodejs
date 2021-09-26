const User = require("../models/User");

exports.login = (req, res) => {
  res.render("./Login/login", {
    title: "ورود",
    path: "/login",
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

    await User.create(req.body);
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
  try {
    await User.loginValidation(req.body);
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    const errors = [];
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
