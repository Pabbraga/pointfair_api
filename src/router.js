const express = require('express');
const controllerUsuario = require('../controllers/usuarioController');
const routes = express.Router();

routes.get('/List', controllerUsuario.List);
routes.get('/Add', controllerUsuario.Add);
routes.get('/Update', controllerUsuario.Update);
routes.get('/SelectOne', controllerUsuario.ListOne);
routes.get('/Delete', controllerUsuario.Delete);

module.exports = routes;