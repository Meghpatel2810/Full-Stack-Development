const express = require('express');
const app=express();
const port=5000;

app.get("/",(req,res) => {
    res.send("This is meghs app");
})

app.get("/home",(req,res) => {
    res.send("Welcome to home page");
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});