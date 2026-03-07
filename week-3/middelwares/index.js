const express = require("express")

const app = express()

// function authenticateUser(req, res, next) {

//   const userName = req.headers.name
//   const password = req.headers.password

//   if (userName !== "AK" || password !== "AK@123") {
//     res.status(402).json({
//       msg: "Invalid username or password"
//     })
//     return
//   } else {
//     next()
//   }

// }

// function kidneysCheck(req, res, next) {

//   const noOfKidneys = parseInt(req.query.n)

//   if (noOfKidneys !== 1 && noOfKidneys !== 2) {
//     res.status(402).json({
//       msg: "This aint human"
//     })
//     return
//   } else {
//     next()
//   }
// }





// for parsing body object into json string use this global middleware,it automattically gets aapplied to each routes


app.use(express.json())



app.post("/checkup", (req, res) => {

  const kidneys = req.body.kidneys
  const kidneysLength = kidneys.length


  res.status(200).json({
    msg: `ALL OKAY and you have ${kidneysLength} kidneys.`,
  })


})

// global catch --> in case of any errors in any routes this catches it and send a good msg to the client
app.use(function (err, req, res, next) {
  res.status(402).json({
    msg: 'Something up with the server'
  })
})


app.listen(3000, () => {
  console.log("Listening on port 3000")
})