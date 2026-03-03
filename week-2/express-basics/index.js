// creating a http server

const express = require("express");

const app = express()

app.get('/', (req, res) => {

  const n = Number(req.params.n)

  const response = n * n

  res.send(`Hi your response ${response}`)
})

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
})