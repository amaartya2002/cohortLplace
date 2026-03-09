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
 */



const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

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