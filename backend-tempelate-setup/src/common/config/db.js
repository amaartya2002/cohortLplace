import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    // console.log('====================================');
    // console.log(connection);
    // console.log('====================================');
    console.log('Connected to DB!');
    console.log(`Connection host: ${conn.connection.host}`);


  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

export default connectToDB