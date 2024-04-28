const express=require('express');
const cors=require('cors');
const app=express();
const routes=require('./route/demoRoute')
app.use(cors({
    origin:true,
    credentials:true
}));
app.use("/api",routes)
app.listen(3001,()=>{
    console.log("App running");
})

