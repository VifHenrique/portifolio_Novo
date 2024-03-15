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
