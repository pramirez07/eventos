// BASE URL: /api/events
const router = require('express').Router();

const { getAll, createEvent, updateEvent, deleteEvent, getEventById, getUpcoming, getByDateRange } = require('../../controllers/events.controller');
const { checkToken } = require('../../utils/middlewares');

router.get('/upcoming', getUpcoming);
router.get('/date', getByDateRange);
router.get('/', getAll);
router.get('/:eventId', getEventById);

router.post('/', checkToken, createEvent);
router.put('/:eventId', checkToken, updateEvent);
router.delete('/:eventId', checkToken, deleteEvent);

module.exports = router;