// import mongoose from "mongoose"
// import dotenv from 'dotenv'
// dotenv.config()

// if( process.env.MONGODB_URI){
//     throw new Error(
//         "plese provide MONGODB_URI in the .env file"
//     )
// }

// async function connectDB(){
//     try  {
//         await mangoose.connct (process.env.MANGODB_URI)
//         console.log("connect DB")
//     }catch (error){
//         console.log("mongodb connect error",error)
//         process.exit(1)
//     }
//     }

//     export default connectDB

// config/connectDB.js
import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("❌ please provide MONGODB_URI in the .env file");
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
