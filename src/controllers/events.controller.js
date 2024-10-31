const Event = require('../models/events.model');

const getAll = async (req, res, next) => {
    try {
        let events;
        if(req.query.type !== undefined){
            events = await Event.find({tipoDeporte: req.query.type});
        }
        else{
            events = await Event.find();
        }
        
        res.json(events);
    } catch (error) {
        next(error);
    }
}

const getEventById = async (req, res, next) => {
    const { eventId } = req.params;

    try {
        const product = await Event.findById(eventId);
        res.json(product);
    } catch (error) {
        next(error);
    }
};

const getUpcoming =  async (req, res, next) => {
    try {
        const today = new Date(Date.now())
        const events = await Event.find({fecha: {$gt: today.toISOString()}}).sort('fecha');
        res.json(events);
    } catch (error) {
        next(error);
    }
}

const getByDateRange = async (req, res, next) => {
    const { from, to } = req.query;

    try {
        const events = await Event.find({
            fecha: {
                $gte: new Date(from).toISOString(),
                $lte: new Date(to).toISOString()
            }
        });
        res.json(events);
    } catch (error) {
        next(error);
    }
}

const createEvent = async (req, res, next) => {

    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        next(error);
    }
}

const updateEvent = async (req, res, next) => {
    const { eventId } = req.params;

    try {
        const event = await Event.findByIdAndUpdate(
            eventId, req.body, { new: true }
        );
        res.json(event);
    } catch (error) {
        next(error);
    }
}

const deleteEvent = async (req, res, next) => {
    const { eventId } = req.params;

    try {
        const event = await Event.findByIdAndDelete(eventId);
        res.json(event);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll, getEventById, createEvent, updateEvent, deleteEvent, getUpcoming, getByDateRange
}