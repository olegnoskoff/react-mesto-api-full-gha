/* eslint-disable no-console */
/* eslint-disable consistent-return */
const express = require('express');

const app = express();

// Массив доменов, с которых разрешены кросс-доменные запросы
const allowedCors = [
  'https://mesto2023.nomoreparties.co',
  'http://mesto2023.nomoreparties.co',
  'http://localhost:3000',
];

app.use((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req; // Сохраняем тип запроса (HTTP-метод) в соответствующую переменную

  // Проверяем, что источник запроса есть среди разрешённых
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');

    // Сохраняем список заголовков исходного запроса
    const requestHeaders = req.headers['access-control-request-headers'];
    const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

    if (method === 'OPTIONS') {
      // Это предварительный запрос, добавляем нужные заголовки
      res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
      res.header('Access-Control-Allow-Headers', requestHeaders);
      return res.sendStatus(204); // Предварительный запрос, отправляем пустой успешный ответ
    }
  }

  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
