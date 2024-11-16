document.addEventListener("DOMContentLoaded", () => {
    console.log("Site carregado com sucesso!");

    // Smooth scrolling apenas para âncoras internas
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", event => {
            const href = event.target.getAttribute("href");

            // Se o link começa com '#' (âncora interna), faz smooth scroll
            if (href.startsWith("#")) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Site carregado com sucesso!");

    // Mensagens da Bíblia
    const mensagens = [
        "Confie no Senhor de todo o coração e não se apoie em seu próprio entendimento. - Provérbios 3:5",
        "Tudo posso naquele que me fortalece. - Filipenses 4:13",
        "Pois eu sei os planos que tenho para você, diz o Senhor, planos de prosperar e não de causar dano, planos de dar esperança e um futuro. - Jeremias 29:11",
        "O Senhor é meu pastor e nada me faltará. - Salmos 23:1",
        "Alegrem-se sempre. Orem continuamente. Dêem graças em todas as circunstâncias. - 1 Tessalonicenses 5:16-18"
    ];

    // Seleciona uma mensagem aleatória
    const mensagemDiaria = mensagens[Math.floor(Math.random() * mensagens.length)];

    // Exibe a mensagem na seção
    document.getElementById("mensagem").textContent = mensagemDiaria;
});