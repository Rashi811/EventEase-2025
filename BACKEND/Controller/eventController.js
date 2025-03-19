const Event = require('../Model/Event');

exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getEvents = async (req, res) => {
    const events = await Event.find();
    res.json(events);
};

exports.getEvent = async (req, res) => {
    const event = await Event.findOne({ eventName: req.params.eventName });
    if (!event) {
        return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
};

exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findOneAndUpdate(
            { eventName: req.params.eventName }, // Filter by eventName
            req.body, // Updated data
            { new: true, runValidators: true } // Return the updated document and run validators
        );
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findOneAndDelete({ eventName: req.params.eventName });
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json({ message: 'Event deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.generateSummaryReport = async (req, res) => {
    const events = await Event.find();
    res.json({ totalEvents: events.length, events });
};


