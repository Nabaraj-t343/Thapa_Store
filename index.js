import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieparser from 'cookie-parser'
import morgan from 'morgan'
import helmet, { crossOriginResourcePolicy } from 'helmet'
import connectDB from "./config/connectDB.js";
import userRouter from "./route/user.route.js";
import categoryRouter from './route/category.route.js'
import uploadRouter from './route/upload.router.js'
import subCategoryRouter from './route/subCategory.route.js'
import productRouter from './route/product.route.js'
import cartRouter from './route/cart.route.js'
import addressRouter from './route/address.route.js'

const app = express()
app.use(cors({
    credentials:true,
    origin: process.env.FRONTEND_URL

}))
app.use(express.json());
app.use(cookieparser())
app.use(morgan("combined"))
app.use(helmet({
   crossOriginResourcePolicy :false
}))

const PORT = process.env.PORT || 8080;


app.get("/",(request,response)=>{
    ///server to client
response.json({
    message: "server is running " + PORT
})
})

app.use("/api/user", userRouter);
app.use(express.static("public"));

connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log("server is running",PORT)
})
})



