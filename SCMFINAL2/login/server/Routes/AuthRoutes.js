const { register, login,logout } = require("../Controllers/AuthController");
const { checkUser } = require("../Middlewares/AuthMiddlewares");


const router=require("express").Router();
router.post("/registered",checkUser);
router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.post("/");
module.exports=router; 