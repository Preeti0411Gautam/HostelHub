import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    serviceType: {
        type: String,
        enum: ['Electricity', 'Internet', 'Plumbing', 'Water', 'Security'], 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student', 
        required: true
    },
    // assignedTo: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Staff', 
    //     required: true
    // },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending',
        required: true
    },
    requestDate: {
        type: Date,
        default: Date.now
    },
    completionDate: {
        type: Date
    },
    currentLocation: {
        type: String, 
        required: true // e.g., electrician currently working in room number 1000, so we can track it
    },
    availability: {
        type: [String],
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        required: true
    },
    aadharNumber: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

export default Service;
