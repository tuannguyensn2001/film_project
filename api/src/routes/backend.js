const express = require('express');

const filmController = require('../controllers/backend/film.controller');

const router = express.Router();

router.post('/v1/films', filmController.create);

module.exports = router;
