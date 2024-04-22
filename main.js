const express = require("express");
const app = express();

app.get('/', (req, res)=> {
    res.send("tu bhadwa");
})
const port = process.env.port || 8000;
app.listen(port);