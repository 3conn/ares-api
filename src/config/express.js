const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json({ limit: '50mb' }));

//Definição de rotas
const routes = require('../routes/UsuarioRouter')
app.use(routes);

module.exports = app;