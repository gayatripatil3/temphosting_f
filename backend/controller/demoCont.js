exports.demoFun=async (req,res)=>{
    try{
            const {val}=req.params
            if(!val)
            return res.json({success:false, textVal:"Value not provided"})
            res.json({success:true, textVal:val})
        }catch(e){
        res.json({success:false, message:"error"})
    }
}
