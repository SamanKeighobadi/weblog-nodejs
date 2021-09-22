const { Router } = require("express");

const router = new Router();

// @desc Dashboard
// @route : GET /dashboard
router.get('/',(req,res) => {
  res.render('dashboard',{
    title:'داشبورد',
    path:'/dashboard',
    layout:'./layouts/dashLayout'
  })
})

// @desct Login page 
// @route : GET /login
router.get("/login", (req, res) => {
  res.render("./Login/login", {
    title: "Login Page",
    path: "/login",
  });
});


module.exports = router;
