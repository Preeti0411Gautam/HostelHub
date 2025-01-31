import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Warden', 'Chief Warden', 'Caretaker'],
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    availability: {
        type: [String],
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        required: true
    },
    email:{
        type:String,
        required: true
    },
    contactNumber:{
        type:String,
        required: true
    }
}, { timestamps: true });

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;
