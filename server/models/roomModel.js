import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    block: {
        type: String,
        enum: ['A', 'B', 'C', 'D'],
        required: true
    },
    roomNo: {
        type: String,
        required: true
    },
    occupancyType: {
        type: String,
        enum: ['Single', 'Double', 'Triple'],
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        default: null
    }
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);

export default Room;
