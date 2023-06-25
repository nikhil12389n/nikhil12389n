const {addmonuments,allmonuments,register,login,logout,addtocart,deletemonument,role,carts,deletecart,readusers}=require("../Controllers/AuthControllers.js");


const router=require('express').Router();


router.post('/AddMonuments',addmonuments);


router.get('/AllMonuments',allmonuments);


router.post('/Register',register);


router.post('/Login',login);



router.get('/ReadUsers',readusers);

router.post('/logout',logout);



router.delete('/DeleteMonument',deletemonument);


router.post('/Addtocart',addtocart);


router.get('/Role',role);



router.get('/Carts',carts);

router.delete('/DeleteCart',deletecart);
module.exports=router;