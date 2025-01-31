import mongoose from 'mongoose';

const guardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // role: {
    //     type: String,
    //     enum: ['Guard', 'Warden', 'Caretaker', 'Service Staff'],
    //     required: true
    // },
    contactNumber: {
        type: String,
        required: true
    },
    shift: {
        type: String,
        enum: ['Shift 1', 'Shift 2', 'Shift 3'], 
        required: true
    },
    shiftTime: {
        type: String,
        enum: ['00:00-08:00', '08:00-16:00', '16:00-00:00'], 
        required: true
    },
    // hostel: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Hostel', 
    //     required: true
    // }
    aadharNumber: {
        type: String,
        required: true
    }
}, 
{ timestamps: true }
);

const Guard = mongoose.model('Staff', guardSchema);

export default Guard;
