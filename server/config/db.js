import mongoose from "mongoose";


const connectDB = async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected Successfully")
    }catch(err){
        console.error("Error in connecting to MongoDB ", err.message);
        process.exit(1);
    }
}

export default connectDB;