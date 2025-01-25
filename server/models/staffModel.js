import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Guard', 'Warden', 'Caretaker', 'Service Staff'],
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    shift: {
        type: String,
        enum: ['Day', 'Night'], 
        required: true
    },
    shiftTime: {
        type: String,
        enum: ['06:00-20:00', '20:00-06:00'], 
        required: true
    },
    hostel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hostel', 
        required: true
    }
}, 
{ timestamps: true }
);

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;
