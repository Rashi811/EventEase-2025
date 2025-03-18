const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventType: String,
    eventName: String,
    contactNumber: String,
    email: String,
    date: Date,
    guestCount: Number,
    guestDetails: String,
    specialNotes: String
});

module.exports = mongoose.model('Event', EventSchema);
