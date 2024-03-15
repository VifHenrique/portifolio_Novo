<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se todos os campos foram preenchidos
    if (isset($_POST["nome"]) && isset($_POST["email"]) && isset($_POST["mensagem"])) {
        // Sanitiza os dados recebidos
        $nome = htmlspecialchars($_POST["nome"]);
        $email = htmlspecialchars($_POST["email"]);
        $mensagem = htmlspecialchars($_POST["mensagem"]);

        // Configurações do e-mail
        $destinatario = "seu_email@example.com"; // Altere para o seu e-mail
        $assunto = "Contato do site";

        // Monta o corpo do e-mail
        $corpo_email = "Nome: $nome\n";
        $corpo_email .= "Email: $email\n";
        $corpo_email .= "Mensagem:\n$mensagem\n";

        // Envia o e-mail
        if (mail($destinatario, $assunto, $corpo_email)) {
            // E-mail enviado com sucesso
            echo "<p>Obrigado por entrar em contato. Seu e-mail foi enviado com sucesso.</p>";
        } else {
            // Falha ao enviar o e-mail
            echo "<p>Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.</p>";
        }
    } else {
        // Caso algum campo não tenha sido preenchido
        echo "<p>Por favor, preencha todos os campos do formulário.</p>";
    }
} else {
    // Se o formulário não foi enviado
    echo "<p>Este arquivo não deve ser acessado diretamente.</p>";
}
?>
