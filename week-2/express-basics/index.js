// creating a http server

const express = require("express");

const app = express()

const users = [
  {
    name: "AK",
    kidneys: [{
      healthy: false
    }
    ]
  }
]

// how many kidneys do i have and how many are healthy
app.get("/", (req, res) => {
  const noOfKidneys = users[0]?.kidneys?.length
  const noOfHealthyKidneys = users[0]?.kidneys?.filter(k => k.healthy === true).length

  res.status(200).send(`No of kidneys user has: ${noOfKidneys} and ${noOfHealthyKidneys} healthy kidneys he has!`)
})

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
})