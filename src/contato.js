document.getElementById('contato').innerHTML = `
    <h2>Entre em Contato</h2>
    <form id="form-contato">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Seu email" required />
        
        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" required></textarea>
        
        <button type="submit">Enviar</button>
    </form>
`;

// Event Listener para envio do formulário
document.getElementById('form-contato').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    try {
        const response = await fetch('URL_DA_FUNCAO_LAMBDA', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, mensagem }),
        });

        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
        } else {
            alert('Erro ao enviar mensagem. Tente novamente.');
        }
    } catch (error) {
        alert('Erro na conexão. Verifique sua internet.');
    }
});
