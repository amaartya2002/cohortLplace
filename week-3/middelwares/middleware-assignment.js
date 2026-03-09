const express = require("express")

const app = express()

let requestCount = 0;

/**
   1. create a middlewarre for logging the number of requests to the server
      You have been given an express server which has a few endpoints.
      Your task is to create a global middleware (app.use) which will
      maintain a count of the number of requests made to the server in the global
      requestCount variable

   2.  You have been given an express server which has a few endpoints.
       Your task is to create a global middleware (app.use) which will
       rate limit the requests from a user to only 5 request per second
       If a user sends more than 5 requests in a single second, the server
       should block them with a 404.
       User will be sending in their user id in the header as 'user-id'
       You have been given a numberOfRequestsForUser object to start off with which
       clears every one second   


 **/

app.use(ServerRequestCount)
app.use(rateLimiter)

function ServerRequestCount(req, res, next) {
  requestCount += 1
  next()
}


let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 5000)


function rateLimiter(req, res, next) {

  const userId = req.headers["user-id"]
  numberOfRequestsForUser[userId] = (numberOfRequestsForUser[userId] || 0) + 1
  if (numberOfRequestsForUser[userId] < 5) {
    next()
  } else {
    res.status(404).json({
      msg: "Sorry you bombarding the server sir"
    })
  }
}


app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john', requestCount });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user', requestCount });
});

app.get('/requestCount', function (req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3000, () => {
  console.log(`Happy listening on port 3000`)
})