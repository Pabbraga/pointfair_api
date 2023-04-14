const express = require('express');
const controllerFeira = require('../controllers/feiraController')
const controllerUsuario = require('../controllers/usuarioController');
const controllerEndereco = require('../controllers/enderecoController');
const controllerVendedor = require('../controllers/vendedorController');
const controllerProduto = require('../controllers/produtoController');
const routes = express.Router();

routes.get('/feira/List', controllerFeira.List);
routes.get('/feira/Add', controllerFeira.Add);
routes.get('/feira/Update', controllerFeira.Update);
routes.get('/feira/SelectOne', controllerFeira.ListOne);
routes.get('/feira/Delete', controllerFeira.Delete);

routes.get('/endereco/List', controllerEndereco.List);
routes.get('/endereco/Add', controllerEndereco.Add);
routes.get('/endereco/Update', controllerEndereco.Update);
routes.get('/endereco/SelectOne', controllerEndereco.ListOne);
routes.get('/endereco/Delete', controllerEndereco.Delete);

routes.get('/vendedor/List', controllerVendedor.List);
routes.get('/vendedor/Add', controllerVendedor.Add);
routes.get('/vendedor/Update', controllerVendedor.Update);
routes.get('/vendedor/SelectOne', controllerVendedor.ListOne);
routes.get('/vendedor/Delete', controllerVendedor.Delete);

routes.get('/produto/List', controllerProduto.List);
routes.get('/produto/Add', controllerProduto.Add);
routes.get('/produto/Update', controllerProduto.Update);
routes.get('/produto/SelectOne', controllerProduto.ListOne);
routes.get('/produto/Delete', controllerProduto.Delete);

routes.get('/usuario/List', controllerUsuario.List);
routes.get('/usuario/Add', controllerUsuario.Add);
routes.get('/usuario/Update', controllerUsuario.Update);
routes.get('/usuario/SelectOne', controllerUsuario.ListOne);
routes.get('/usuario/Delete', controllerUsuario.Delete);

module.exports = routes;