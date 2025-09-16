const express = require('express')
const dotenv = require('dotenv')
const { default: dbconnect } = require('./config/dbconnect')

dbconnect();

dotenv.config()

const app=express()
const PORT=process.env.PORT

app.get('/',(req,res) => {
    res.send(`<h1>Welcome to our site</h1>`);
})

app.listen(PORT, () => {
    console.log("Server started at http://127.0.0.1:"+PORT);
})