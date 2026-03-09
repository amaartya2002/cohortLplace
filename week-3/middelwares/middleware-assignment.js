const express = require("express")

const app = express()

let requestCount = 0;

/**
   1. create a middlewarre for logging the number of requests to the server
      You have been given an express server which has a few endpoints.
      Your task is to create a global middleware (app.use) which will
      maintain a count of the number of requests made to the server in the global
      requestCount variable


 **/

app.use(ServerRequestCount)


function ServerRequestCount(req, res, next) {
  requestCount += 1
  next()
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