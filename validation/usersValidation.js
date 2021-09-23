const yup = require("yup");

const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل معتبر نمی باشد")
    .required("ایمیل اجباری میباشد"),
  password: yup
    .string()
    .required("کلمه عبور اجباری می باشد")
    .min(4, "کلمه عبور کمتر از  4 کارکتر میباشد")
    .max(120, "کلمه عبور بیشتر  از 120 کارکتر میباشد")
    .trim(),
});

const registerValidation = yup.object().shape({
  fullname: yup
    .string()
    .required("نام ونام خانوادگی اجبار ی می باشد")
    .min(4, "نام ونام خانوادگی نباید کمتر از 4 کارکتر باشد")
    .max(120, "نام ونام خانوادگی نباید بیشتر از 120 کارکتر باشد")
    .trim(),
  email: yup
    .string()
    .email("ایمیل معتبر نمیباشد")
    .required("ایمیل اجباری میباشد"),
  password: yup
    .string()
    .required("کلمه عبور الزامی می باشد")
    .min(4, "کلمه عبور کمتر از  4 کارکتر میباشد")
    .max(120, "کلمه عبور بیشتر  از 120 کارکتر میباشد"),
  confirm_password: yup
    .string()
    .required("تکرار کلمه عبور الزامی می باشد")
    .oneOf([yup.ref("password"), null], "تکرار کلمه عبور صحیح نمی باشد"),
});

module.exports = {
  loginValidation,
  registerValidation,
};
