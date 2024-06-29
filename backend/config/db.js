import mongoose from "mongoose";

export const connectDB = async() => {
  await mongoose.connect('mongodb+srv://amanbanka:7781037376@cluster0.mkomyjf.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}