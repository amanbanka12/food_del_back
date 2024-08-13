import express, { response } from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import foodRouter from "./routes/foodroutes.js"
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config' 
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




//app config
const app =express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())


//db connection 
connectDB();

//Api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);


app.get("/",(req,res)=>{
  res.send("API working")
})

app.listen(port,()=>{
  console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://amanbanka:7781037376@cluster0.mkomyjf.mongodb.net/?