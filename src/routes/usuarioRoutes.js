const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.listarUsuarios);
router.post('/agregar', usuarioController.agregarUsuario);
router.put('/editar', usuarioController.editarUsuario);
router.delete('/eliminar', usuarioController.eliminarUsuario);

module.exports = router;
