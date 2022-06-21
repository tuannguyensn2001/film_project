const scheduleController = require('../controllers/frontend/schedule.controller');
const interceptor = require('../interceptors/error');
const express = require('express');
const router = express.Router();
const authController = require('../controllers/frontend/auth.controller');

router.get(
    '/v1/schedules/film/:id',
    interceptor(scheduleController.findByFilm)
);

router.post('/v1/auth/register', interceptor(authController.register));

module.exports = router;
