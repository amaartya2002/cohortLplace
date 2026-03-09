const express = require("express")

const app = express()

//console.log(typeof app)

app.listen(3000, () => {
  console.log(`Happy listening on port 3000`)
})