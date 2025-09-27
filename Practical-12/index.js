const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));

app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.post('/maths' , (req,res) => {
    const num1= parseFloat(req.body.num1);
    const num2= parseFloat(req.body.num2);
    
    res.send(`Add  : ${num1 + num2} <br> Sub : ${num1 - num2} <br> Mul : ${num1 * num2} <br> Div : ${num1 / num2}`);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});