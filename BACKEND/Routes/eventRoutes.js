const express = require('express');
const { createEvent, getEvents, getEvent, updateEvent, deleteEvent, generateSummaryReport } = require('../Controller/eventController');
const { authMiddleware } = require('../Middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', authMiddleware, getEvents);
router.get('/:eventName', authMiddleware, getEvent);
router.put('/:eventName', authMiddleware, updateEvent);
router.delete('/:eventName', authMiddleware, deleteEvent);
router.get('/report', authMiddleware, generateSummaryReport);

module.exports = router;
