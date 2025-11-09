const http = require('http')
const fs = require('fs')

//imp for loading html page paths
const path = require('path')


const express = require('express')

const PORT = 5000

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs")
app.set("views" , path.join(__dirname,"views"))

// http.createServer((req,res) => {
// 
//     res.end(`<h1>Hello World</h1>`);
// }).listen(3000)


app.get('/' , (req,res) => {
    res.send("Hello Express")

})

app.get('/error-files' , (req,res) => {
    fs.readFile("logs.txt",'utf-8', (err , data) => {
        if(err){
            console.log(err)
            res.redirect("/")
        }
        else{
            res.send(data)
        }
    })
})

//Form submission


app.get("/fill-form",(req,res) => {
    res.render("form")
})

app.post("/submit" , (req,res) => {
    console.log(req.body)
    res.render("Form-submitted" , {data : req.body})
})

//Tax submission

app.get("/Tax" , (req,res) => {
    res.render("Income" )
})

app.post("/check-income" , (req,res) => {
    console.log(req.body)

    Income1 = parseFloat(req.body.Income1)
    Income2 = parseFloat(req.body.Income2)
    
    if (Income1<0 || Income2<0)
    {
        res.send("Please enter proper values")
    }

    const ouptut = {
        Source1 : req.body.Source1,
        Source2 : req.body.Source2,
        Total_Income : Income1+Income2
    }

    res.render("Tax-info" , {data : ouptut})
})

//Calculator 

app.get("/calculator" , (req,res) => {
    res.render("calc")
})

app.post("/calculate" , (req,res) => {
    no1 = parseFloat(req.body.no1);
    no2 = parseFloat(req.body.no2);

    const ouptut = {
        "no1" : no1 ,
        "no2" : no2 ,
        "add" : no1+no2 ,
        "sub" : no1-no2 ,
        "mul" : no1*no2 ,
        "div" : no1/no2
    }

    res.render("show_calcs" , {data : ouptut})
})

app.listen(PORT , () => {
    console.log(`Server started at http://127.0.0.1:${PORT} `)
})

