
const {addmonuments}=require("../Controllers/Authcontrollers.js");
const router=require('express').Router();


router.post('/AddMonuments',addmonuments);

module.exports=router;