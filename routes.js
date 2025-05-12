require('dotenv').config();
const express = require('express');
const { buscarUsuarios, contUsuarios, criarUsuario, editarUsuario, deletarUsuario } = require('../controllers/userController');

const router = express.Router();

router.get('/', buscarUsuarios);
router.get('/count', contUsuarios);
router.post('/', criarUsuario);
router.put('/:id', editarUsuario);
router.delete('/:id', deletarUsuario);

module.exports = router;
