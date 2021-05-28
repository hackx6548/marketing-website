const express = require('express');
const router = express.Router();
const EventsController = require('../controllers/EventsController');
router.get('/', EventsController.getEvents);
router.get('/:location', EventsController.getEventsByLocation);
module.exports = router;
//# sourceMappingURL=events.js.map