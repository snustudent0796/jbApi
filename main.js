const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.send("tu bhadwa");
});

app.post("/toggle", (req, res) => {
  res.send(req.body);
});

app.get("/json", (req, res) => {
  const lDist = Math.random() * 100;
  const rDist = Math.random() * 100;
  const suitData = { lDist, rDist };
  res.send(JSON.stringify(suitData));
});

const port = process.env.port || 8000;
app.listen(port, console.log(`LISTENING ON ${port} http://localhost:${port}`));
