const express = require('express');
const controllerFeira = require('../controllers/feiraController')
const controllerUsuario = require('../controllers/usuarioController');
const controllerEndereco = require('../controllers/enderecoController');
const controllerVendedor = require('../controllers/vendedorController');
const controllerProduto = require('../controllers/produtoController');
const controllerEnderecoFeira = require('../controllers/enderecoFeiraController');
const routes = express.Router();

routes.get('/list/feira', controllerFeira.List);
routes.get('/add/feira', controllerFeira.Add);
routes.get('/update/feira', controllerFeira.Update);
routes.get('/select/feira', controllerFeira.ListOne);
routes.get('/delete/feira', controllerFeira.Delete);

routes.get('/list/endereco', controllerEndereco.List);
routes.get('/add/endereco', controllerEndereco.Add);
routes.get('/update/endereco', controllerEndereco.Update);
routes.get('/select/endereco', controllerEndereco.ListOne);
routes.get('/delete/endereco', controllerEndereco.Delete);

routes.get('/list/vendedor', controllerVendedor.List);
routes.get('/add/vendedor', controllerVendedor.Add);
routes.get('/update/vendedor', controllerVendedor.Update);
routes.get('/select/vendedor', controllerVendedor.ListOne);
routes.get('/delete/vendedor', controllerVendedor.Delete);

routes.get('/list/produto', controllerProduto.List);
routes.get('/add/produto', controllerProduto.Add);
routes.get('/update/produto', controllerProduto.Update);
routes.get('/select/produto', controllerProduto.ListOne);
routes.get('/delete/produto', controllerProduto.Delete);

routes.get('/list/usuario', controllerUsuario.List);
routes.get('/add/usuario', controllerUsuario.Add);
routes.get('/update/usuario', controllerUsuario.Update);
routes.get('/select/usuario', controllerUsuario.ListOne);
routes.get('/delete/usuario', controllerUsuario.Delete);

routes.get('/list/enderecoFeira', controllerEnderecoFeira.List);

module.exports = routes;