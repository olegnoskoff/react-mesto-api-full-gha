/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable prefer-arrow-callback */
const express = require('express');

const app = express();

// Массив доменов, с которых разрешены кросс-доменные запросы
const allowedCors = [
  'https://mesto2023.nomoreparties.co',
  'http://mesto2023.nomoreparties.co',
  'http://localhost:3000',
];

app.use(function (req, res, next) {
  const { origin } = req.headers;
  const { method } = req;

  // Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  // Если источник запроса есть среди разрешенных
  if (allowedCors.includes(origin)) {
    // Устанавливаем заголовок, который разрешает браузеру запросы с этого источника
    res.header('Access-Control-Allow-Origin', origin);

    // Если это предварительный запрос (метод OPTIONS)
    if (method === 'OPTIONS') {
      // Сохраняем список заголовков исходного запроса
      const requestHeaders = req.headers['access-control-request-headers'];

      // Разрешаем кросс-доменные запросы с этими заголовками
      res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
      res.header('Access-Control-Allow-Headers', requestHeaders);

      // Отправляем ответ и завершаем цикл обработки
      return res.end();
    }
  }

  next();
});
