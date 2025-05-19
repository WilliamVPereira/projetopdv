const bcrypt = require('bcrypt');

async function gerarHash(senha, saltRounds = 10) {
  try {
    const hash = await bcrypt.hash(senha, saltRounds);
    console.log('Senha original:', senha);
    console.log('Hash gerado:', hash);
  } catch (error) {
    console.error('Erro ao gerar hash:', error);
  }
}

// Pega a senha da linha de comando ou usa um padrão
const senha = process.argv[2] || '123456';

// Chama a função com a senha
gerarHash(senha);
