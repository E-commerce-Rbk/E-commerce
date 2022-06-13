import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import cookieParser from 'cookie-parser';

import productRoutes from './routes/product.js'
import userRoutes from'./routes/user.js'
import cartRoutes from "./routes/cart.js"
const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const CONNECTION_URL ='mongodb+srv://rbk:rbk123456789@ecommerce.kwvvj.mongodb.net/?retryWrites=true&w=majority'
const PORT=process.env.PORT || 5000;
app.use('/product',productRoutes)
app.use("/cart", cartRoutes);
app.use('/user',userRoutes)
app.get("/",(req,res)=>{
    res.send("app running")
})
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server runing on port:${PORT}`)))
.catch((err)=>console.log(err.message))

