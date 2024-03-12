document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const sections = document.querySelectorAll('.section');

    // Adiciona um evento de clique ao toggle de modo escuro
    darkModeToggle.addEventListener('click', function() {
        // Alterna entre as classes 'dark-mode' e 'light-mode' no body
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        // Alterna entre as classes 'dark-mode' e 'light-mode' em cada seção
        sections.forEach(section => {
            section.classList.toggle('dark-mode');
            section.classList.toggle('light-mode');
        });

        // Altera a cor do ícone da lua
        const moonIcon = darkModeToggle.querySelector('i');
        moonIcon.classList.toggle('dark-mode');
        moonIcon.classList.toggle('light-mode');
    });

    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('.nav-link');

    // Adiciona um manipulador de evento de clique a cada link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Obtém o ID da seção correspondente ao link
            const targetId = link.getAttribute('href');

            // Seleciona a seção correspondente pelo ID
            const targetSection = document.querySelector(targetId);

            // Usa o método scrollIntoView() para rolar a página até a seção correspondente
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
