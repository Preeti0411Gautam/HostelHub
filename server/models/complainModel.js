import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
    complaintType: {
        type: String,
        enum: ['Maintenance', 'Service', 'Security', 'Other'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    filedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Resolved'],
        default: 'Pending',
        required: true
    },
    filedDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    resolvedDate: {
        type: Date
    }
}, { timestamps: true });

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;
