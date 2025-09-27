const express = require('express');
const app = express();
const port = 5000 ;

app.get("/" , (req,res) => {
    res.send(`<h1>Welcome to our site</h1>`);
})


app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
})