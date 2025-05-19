const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user-routes');
const authRoutes = require('./routes/auth-routes');
require('dotenv').config();

const app = express();

app.use(express.json());

// CORS
app.use(cors({
  origin: 'http://127.0.0.1:5500'  // endereço do Live Server
}));

// Middleware para responder OPTIONS (preflight) para todas as rotas
app.options('*', (req, res) => {
  res.sendStatus(204);
});

// Rotas
app.use('/usuarios', userRoutes);
app.use('/auth', authRoutes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
