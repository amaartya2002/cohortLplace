// creating a http server

const express = require("express");

const app = express()

app.use(express.json())

const users = [
  {
    name: "AK",
    kidneys: [{
      healthy: false
    }
    ]
  }
]

// -- query request also studied --> http://localhost:3000/?n=10 => catch it through const n = req.query.n
// how many kidneys do i have and how many are healthy => (GET req)
app.get("/", (req, res) => {
  const noOfKidneys = users[0]?.kidneys?.length
  const noOfHealthyKidneys = users[0]?.kidneys?.filter(k => k.healthy === true).length
  const noOgUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys

  res.status(200).json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOgUnhealthyKidneys
  })
  //res.status(200).send(`No of kidneys user has: ${noOfKidneys} and ${noOfHealthyKidneys} healthy kidneys he has!`)
})



// endpoint to add a new kidney => (POST req) -> (put something on the server)
// --- User sends kidney status, that means everytime post request is called then add a new kidney too a user according to what user sent---
app.post("/", (req, res) => {

  // console.log(req.body) // undefined but using middlewres solves it, as express.json() lets you parse json objects
  const newKidneyStatus = req.body.isHealthy

  // add it to the use
  users[0]?.kidneys?.push({ healthy: newKidneyStatus })

  res.json({
    msg: "Done"
  })

})


// replaces all kidneys and make them healthy
app.put("/", (req, res) => {

  for (const kidney of users[0]?.kidneys) {
    if (kidney.healthy === false) {
      kidney.healthy = true
    }
  }

  res.send("Kidneys updated!")
})

// if someone comes to this rote then the server removes all the unhealthy kidneys
app.delete("/", (req, res) => {

  const newHealthyKidneys = users[0].kidneys.filter(kidney => kidney.healthy === true)

  users[0].kidneys = [...newHealthyKidneys]

  res.json({
    msg: "Unhealthy kidneys removed"
  })
})




app.listen(3000, () => {
  console.log(`Listening on port 3000`);
})