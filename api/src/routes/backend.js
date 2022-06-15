const express = require('express');
const interceptor = require('../interceptors/error');
const filmController = require('../controllers/backend/film.controller');

const router = express.Router();

router.post('/v1/films', filmController.create);
router.get('/v1/films', filmController.index);
router.get('/v1/films/:id', interceptor(filmController.show));
router.put('/v1/films/:id', interceptor(filmController.update));

module.exports = router;
