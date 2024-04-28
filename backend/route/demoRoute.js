const express=require('express')
const router=express.Router();
const {demoFun}=require('../controller/demoCont')
router.get('/msg/:val',demoFun)

module.exports=router;