'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        this.textContent = "Claro";  // Texto do botão muda para "Light" quando o tema escuro está ativo
    } else {
        this.textContent = "Escuro";   // Texto do botão muda para "Dark" quando o tema claro está ativo
    }
});
