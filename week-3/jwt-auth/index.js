/**
 * PROBLEM STATEMENT
 * 
 * 1. When the user uses the post method with => POST/signin
 * {
 * username: string,
 * password: string
 * }
 * WHat to do?
 * Create a jwt on this username encrypted and return it back to the user, provided that the user exists in the in-memory DB.
 * 
 * 2.Route GET/signin with headers Headers - Authorization Header(jwt token)
 * 
 * What to do?
 * Return the array of all the users if the jwt is correct otherwise if token not correct return 403 status code.
 * 
 * 
 * 3. Create the POST/signin endpoint which will create a new user in the mongoDB database if the user does not exist
 * 
 */


require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const jwtPassword = "123456";

const app = express();

app.use(express.json())



mongoose.connect(
  process.env.MONGOOSSE_URI,
).then(() => {
  console.log(`Connected to the DB successfully`)
})

const User = mongoose.model("Users", {
  username: String,
  password: String,
  email: String
})

app.post("/signup", async (req, res) => {

  const username = req.body.username
  const password = req.body.password
  const email = req.body.email

  const existingUser = await User.findOne({ username })
  console.log(existingUser)

  if (existingUser) {
    res.status(402).send("USER ALREADY EXISTS")
  } else {
    const newUser = new User({ username, password, email })
    newUser.save().then(() => {
      console.log(`User registererd succesfully`)
    }).catch((err) => {
      console.log(`ERROR: ${err.message}`)
    })
  }



})

// const newUser = new User({
//   username: "harkirat@gmail.com",
//   password: "123",
//   name: "harkirat singh",
// })

// newUser.save()


// const ALL_USERS = [
//   ,
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array

  const userExists = ALL_USERS.some((user) => user.username === username && user.password === password)
  return userExists
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    // console.log(decoded)
    const username = decoded.username;

    const allUsersExceptMe = ALL_USERS.filter((user) => user.username !== username)

    res.status(200).json({
      msg: "Job Done",
      users: allUsersExceptMe
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
})

