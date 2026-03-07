const express = require("express")

const app = express()

function authenticateUser(req, res, next) {

  const userName = req.headers.name
  const password = req.headers.password

  if (userName !== "AK" || password !== "AK@123") {
    res.status(402).json({
      msg: "Invalid username or password"
    })
    return
  } else {
    next()
  }

}

function kidneysCheck(req, res, next) {

  const noOfKidneys = parseInt(req.query.n)

  if (noOfKidneys !== 1 && noOfKidneys !== 2) {
    res.status(402).json({
      msg: "This aint human"
    })
    return
  } else {
    next()
  }
}


app.get("/", authenticateUser, kidneysCheck, (req, res) => {

  const userName = req.headers.name
  const noOfKidneys = parseInt(req.query.n)

  res.status(200).json({
    msg: "ALL OKAY",
    alt: `The user ${userName} has ${noOfKidneys} kidneys`
  })


})


app.listen(3000, () => {
  console.log("Listening on port 3000")
})