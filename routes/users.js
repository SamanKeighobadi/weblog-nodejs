const { Router } = require("express");

const User = require("../models/User");

const router = new Router();

const userContollers = require("../controllers/userController");

const { loginValidation } = require("../validation/usersValidation");

// @desct Login page
// @route : GET /users/login
router.get("/login", userContollers.login);

// @desct Login Handler
// @route : POST /users/login
router.post("/login", userContollers.handleLogin);

//@desc Register page
// @route GET /users/register
router.get("/register", userContollers.register);

// @desct Login page handler
// @route : POST /users/login
router.post("/login", userContollers.loginUser);


//@desc Register page
// @route POST /users/register
router.post("/register", userContollers.CreateUser);
 
module.exports = router;
