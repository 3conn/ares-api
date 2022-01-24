const UsuarioController = require('../controllers/usuarioController');
const express = require('express');
const routes = express.Router();

const controller =  new UsuarioController();

routes.post('/usuarios', controller.login);
routes.get('/usuarios/:id', controller.findAll);

module.exports = routes;