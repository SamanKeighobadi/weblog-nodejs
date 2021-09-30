const User = require("../models/User");
const passport = require("passport");
const { Strategy } = require("passport-local");
const bcrypt = require("bcryptjs");

passport.use(
  new Strategy({ usernameField: email }, async (email, password, done) => {
    try {
      const user = User.findOne({ email });
      if (!user) {
        return done(null, false, { message: "کاربری با این ایمیل موجود نیست" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: "نام کاربری یا کلمه عبور نادرست می باشد",
        });
      }
    } catch (err) {
      console.log(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
