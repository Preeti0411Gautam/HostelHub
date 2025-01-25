import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
  name:{
    type:String, 
    required: true
  }, 
  scholarId:{
    type: String,
    required:true,
    unique: true
  },
  email:{
    type: String,
    required:true,
    unique:true
  },
  hostel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel', 
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

export default Student;