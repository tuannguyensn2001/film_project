const Joi = require('joi');
const filmRepository = require('../../repository/film.repository');
const dayjs = require('dayjs');

const create = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    director_raw: Joi.string().required(),
    actor_raw: Joi.string().required(),
    category_raw: Joi.string().required(),
    minutes: Joi.number().required(),
    language_raw: Joi.string().required(),
    time_publish: Joi.string().required(),
    thumbnail: Joi.string().required(),
  });

  const { value, error } = schema.validate(req.body);

  if (!!error?.message) {
    return res.status(400).json({
      message: req.t('data_not_valid'),
      error: error.message,
    });
  }

  value.time_publish = dayjs(value.time_publish, 'DD/MM/YYYY').toDate();

  const result = await filmRepository.create(value);

  return res.json({
    message: req.t('film.create_success'),
  });
};

module.exports = {
  create,
};
