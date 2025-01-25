import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    }, 
    block:{
        type:String , 
        enum:['A', 'B', 'C', 'D'], 
        required: true
    }, 
    roomNo:{
        type:String , 
        required: true
    },
    occupancyType:{
        type:String , 
        enum:['Single', 'Double', 'Triple'], 
        required: true
    }, 

})


const Hostel = mongoose.model('Hostel', hostelSchema);

export default Hostel;