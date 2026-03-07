const express = require("express")
const zod = require("zod")
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


const kidneySchema = zod.array(zod.number())

/**
 * 
 * Write zod schema for this
 * {
 * 
 * email : string => email
 * password : string => at least 8 chars
 * country : "IN" or "US"
 * 
 * }
 */

const mySchema = zod.object({

  email: zod.string().email(),
  password: zod.string().min(6).max(8),
  country: zod.enum(["IN", "US"])

})


app.post("/checkup", (req, res) => {

  const kidneys = req.body.kidneys

  //console.log(kidneySchema.safeParse(kidneys).success)

  const response = mySchema.safeParse({ email: "ak@gmail.com", password: "1234242212", country: "AFG" })
  console.log(response.success)

  if (kidneySchema.safeParse(kidneys).success) {
    const kidneysLength = kidneys.length
    res.status(200).json({
      msg: `ALL OKAY and you have ${kidneysLength} kidneys.`,
    })

  } else {
    res.status(400).json({
      msg: "Kidneys is not even an array"
    })
  }




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