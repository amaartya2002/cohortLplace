import dotenv from "dotenv"
import app from "./src/app.js"

dotenv.config()

const PORT = process.env.PORT || 5000
const ENV = process.env.NODE_ENV


const start = async () => {

  // connect to DB

  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT} in ${ENV} environment`)
  })

}

start().catch((err) => {
  console.error(`Failed to start server: ${err.message}`)
  process.exit(1)
})