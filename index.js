const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.status(200).send({"message":"Hello, Express Works"});
});

app.listen(5000, () => {
  console.log("sample app running");
});