const express = require("express");
const app = express();

app.get('/', (req, res)=> {
    res.send("tu bhadwa");
})

app.listen(8000);