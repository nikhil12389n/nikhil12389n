const { register, login,logout ,postTransaction,getTransactions,postTrackOrder,getTrackorders,register1,deleteRole} = require("../Controllers/AuthController");
const { checkUser } = require("../Middlewares/AuthMiddlewares");


const router=require("express").Router();

router.get('/GetTransactions',getTransactions);
router.post("/registered",checkUser);
router.post("/register",register);

router.post("/register1",register1);
router.post("/login",login);
router.post("/logout",logout);
router.get("/checkUser",checkUser);

router.delete('/deleteRole',deleteRole);
router.get('/getTrackOrders',getTrackorders);
router.post('/postTrackOrder',postTrackOrder);
router.post("/postTransaction",postTransaction);
router.post("/");
module.exports=router;