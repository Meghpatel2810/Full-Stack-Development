const fs=require('fs');
const express = require('express');
const app = express();
app.use(express.text());
const port = 5000;

app.get("/" , (req,res) => {
    const filepath = (__dirname+"/logs.txt");

    fs.readFile(filepath,"utf-8" , (err,data) => {
        if(err){
            console.log(err);
            return res.status(500).send("Error reading file");
        }
        else
        {
            res.send(data);
        }
    })
})

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
})