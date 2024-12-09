const express = require("express");
const cors = require("cors");
const logger = require('./middleware/logger');
const getWormImage = require("./model/wormModel")

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger)


const port = 3000;

app.get("/", (req, res) => {
  const wormImageFilePath = getWormImage();
  console.log(wormImageFilePath)
  res.sendFile(wormImageFilePath);
});

app.post("/", (req, res) => {
  res.json({requestBody: req.body}) 
  console.log(req.body);
});

app.put("/", (req, res) => {
  res.json({requestBody: req.body}) 
  console.log(req.body)
})

app.delete("/", (req, res) => {
  res.json({requestBody: req.body}) 
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
