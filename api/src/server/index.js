const express = require('express');
require('dotenv').config();
const { DATABASE, PORT } = require('../config/index');
const cors = require('cors');
const backendRouter = require('../routes/backend');
const frontendRouter = require('../routes/frontend');
const i18next = require('i18next');
const backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

i18next
    .use(backend)
    .use(middleware.LanguageDetector)
    .init({
        fallbackLng: 'vi',
        backend: {
            loadPath: './src/lang/{{lng}}/translation.json',
        },
    });

const app = express();

app.use(cors());

app.use(middleware.handle(i18next));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/admin/api', backendRouter);
app.use('/api', frontendRouter);

app.listen(PORT);
