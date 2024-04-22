const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded());
app.get('/', (req, res)=> {
    res.send("tu bhadwa");
})
const port = process.env.port || 8000;
app.listen(port);