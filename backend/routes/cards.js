const express = require('express');
const { celebrate, Joi } = require('celebrate');

const { validateObjectId } = require('../utils/validateObjectId');

const {
  getAllCards,
  createCard,
  deleteCard,
  putLike,
  deleteLike,
} = require('../controllers/cardController');

const paramsValidationConfig = {
  params: Joi.object().keys({
    cardId: Joi.string().custom(validateObjectId),
  }),
};

const cards = express.Router();

cards.get('/', getAllCards);

cards.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string()
        .required()
        .regex(/https?:\/\/(www\.)?[0-9a-z\-._~:/?#[\]@!$&'()*+,;=%]+/i),
    }),
  }),
  createCard,
);

cards.delete('/:cardId', celebrate(paramsValidationConfig), deleteCard);

cards.put('/:cardId/likes', celebrate(paramsValidationConfig), putLike);

cards.delete('/:cardId/likes', celebrate(paramsValidationConfig), deleteLike);

module.exports = { cards };
