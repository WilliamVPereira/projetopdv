document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#loginForm');

  if (!form) {
    console.error('Formulário não encontrado. Verifique se o ID está correto.');
    return;
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const usuario = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;

    try {
      const response = await fetch('http://127.0.0.1:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome_usuario: usuario,
          senha: senha
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login bem-sucedido!');
        window.location.href = './carrinho.html';
      } else {
        alert('Erro: ' + (data.error || data.message || 'Erro desconhecido'));
      }

    } catch (error) {
      console.error('Erro de conexão:', error);
      alert('Erro de rede ou servidor offline.');
    }
  });
});
