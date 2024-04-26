function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    var button = document.getElementById('submitButton');
    var loader = document.getElementById('loader');
    var successMessage = document.getElementById('successMessage');

    // Exibe o loader enquanto envia o formulário
    button.style.display = 'none';
    loader.style.display = 'inline-block';

    // Simula um atraso para demonstrar o processo de envio
    setTimeout(function() {
        // Esconde o loader e exibe a mensagem de sucesso
        loader.style.display = 'none';
        successMessage.textContent = 'Obrigado! Seu formulário foi enviado com sucesso.';
        successMessage.style.display = 'block';

        // Limpa os campos do formulário após 2 segundos
        setTimeout(function() {
            document.getElementById('contactForm').reset();
            successMessage.style.display = 'none';
            button.style.display = 'inline-block';
        }, 2000);
    }, 2000);


    // Impede o envio padrão do formulário
    return false;
}
