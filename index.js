import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello world!")
});

app.listen(3000,()=>{
    console.log("server is listening at port 3000");
})