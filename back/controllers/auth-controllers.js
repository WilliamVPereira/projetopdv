const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

// Função para login
async function login(req, res) {
  const { nome_usuario, senha } = req.body;

  if (!nome_usuario || !senha) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }

  try {
    // Buscar usuário pelo nome_usuario
    const sql = 'SELECT * FROM usuario WHERE nome_usuario = ?';
    const [rows] = await pool.execute(sql, [nome_usuario]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
    }

    const user = rows[0];

    // Comparar senha enviada com hash no banco
    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
    }

    // Gerar token JWT 
    const token = jwt.sign(
      { id: user.id, nome_usuario: user.nome_usuario, tipo_acesso: user.tipo_acesso },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Responder com dados do usuário e token
    res.json({
      message: 'Login realizado com sucesso!',
      user: {
        id: user.id,
        nome_usuario: user.nome_usuario,
        tipo_acesso: user.tipo_acesso,
        email_usuario: user.email_usuario,
      },
      token,
    });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
}

module.exports = { login };
