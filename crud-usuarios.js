require('dotenv').config();

const bcrypt = require('bcrypt');
const pool = require('../db');

// GET
async function buscarUsuarios(req, res) {
    try {
        const result = await pool.query('SELECT * FROM usuario');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).send('Erro ao buscar usuários.');
    }
}

// Count e listar
async function contUsuarios(req, res) {
    try {
        const result = await pool.query('SELECT COUNT(id) AS total FROM usuario');
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao contar usuários:', error);
        res.status(500).send('Erro ao contar usuários.');
    }
}

// Create
async function criarUsuario(req, res) {
    const { nome_usuario, email_usuario, senha, confirmaSenha, tipo_acesso } = req.body;

    if (senha !== confirmaSenha) {
        return res.status(400).send('As senhas não coincidem.');
    }

    try {
        const senhaHashada = await bcrypt.hash(senha, 10);
        const sql = 'INSERT INTO usuario (nome_usuario, email_usuario, senha, tipo_acesso) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [nome_usuario, email_usuario, senhaHashada, tipo_acesso || 'caixa'];
        const result = await pool.query(sql, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).send('Erro ao criar usuário.');
    }
}

// Atualizar 
async function editarUsuario(req, res) {
    const { id } = req.params;
    const { nome_usuario, email_usuario, senha, confirmaSenha, tipo_acesso } = req.body;

    if (senha !== confirmaSenha) {
        return res.status(400).send('As senhas não coincidem.');
    }

    try {
        const senhaHashada = await bcrypt.hash(senha, 10);
        const sql = 'UPDATE usuario SET nome_usuario = $1, email_usuario = $2, senha = $3, tipo_acesso = $4 WHERE id = $5 RETURNING *';
        const values = [nome_usuario, email_usuario, senhaHashada, tipo_acesso || 'caixa', id];
        const result = await pool.query(sql, values);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).send('Erro ao atualizar usuário.');
    }
}

// Delete
async function deletarUsuario(req, res) {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM usuario WHERE id = $1', [id]);
        res.status(200).send('Usuário deletado com sucesso.');
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).send('Erro ao deletar usuário.');
    }
}

module.exports = { buscarUsuarios, contUsuarios, criarUsuario, editarUsuario, deletarUsuario };


// app.js - Configuração do servidor
const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/usuarios', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
