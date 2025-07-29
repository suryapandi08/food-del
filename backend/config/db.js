import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('')//enter your mongodb{username,password}
    .then(()=>console.log("DB Connected"));
   
}

