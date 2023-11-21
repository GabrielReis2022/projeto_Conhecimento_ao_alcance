function verificarFormulario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome === '' || email === '' || telefone === '' || mensagem === '') {
    alert('Todos os campos do formulário devem ser preenchidos.');
    return false;
  } else {
    alert('Mensagem Enviada!');
  }
  return true;
}

// Mostra a mensagem de sucesso
function mostrarMensagemSucesso() {
  const balão = document.createElement('div');
  balão.classList.add('mensagem-sucesso');
  balão.innerText = 'Mensagem enviada com sucesso!';

  const elementoForm = document.getElementById('contatos');
  elementoForm.appendChild(balão);
}

// Abrir uma nova janela de navegador
function abrirNovaJanela() {
  window.open('https://formsubmit.co/barbara.melo361@gmail.com', '_blank');
}

// Evento de clique no botão "Enviar"
document.getElementById('btn-enviar').addEventListener('click', function (e) {
  // Verifica se todos os campos do formulário estão preenchidos
  e.preventDefault();
  if (verificarFormulario()) {
    // Abre uma nova janela de navegador
    abrirNovaJanela();
  }
});
