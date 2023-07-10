const { register, login,logout ,postTransaction,getTransactions,postTrackOrder,getTrackorders} = require("../Controllers/AuthController");
const { checkUser } = require("../Middlewares/AuthMiddlewares");


const router=require("express").Router();

router.get('/GetTransactions',getTransactions);
router.post("/registered",checkUser);
router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);

router.get('/getTrackOrders',getTrackorders);
router.post('/postTrackOrder',postTrackOrder);
router.post("/postTransaction",postTransaction);
router.post("/");
module.exports=router;