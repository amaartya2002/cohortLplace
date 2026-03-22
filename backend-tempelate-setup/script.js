import "./src/common/config/env.js"
import app from "./src/app.js"
import connectToDB from "./src/common/config/db.js"



const PORT = process.env.PORT || 5000
const ENV = process.env.NODE_ENV


const start = async () => {

  // connect to DB
  await connectToDB()

  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT} in ${ENV} environment!!`)
  })

}

start().catch((err) => {
  console.error(`Failed to start server: ${err.message}`)
  process.exit(1)
})