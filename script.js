document.addEventListener('DOMContentLoaded', () => {
    // Menu Responsivo
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        // Toggle Nav
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');

            // Animação do Ícone de Menu
            burger.classList.toggle('toggle');
        });

        // Fechar o menu ao clicar em um link (apenas para mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Somente executar se o menu estiver ativo (aberto)
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            });
        });
    }

    navSlide();

    // Contagem Regressiva
    const countdown = () => {
        // Definindo a data do evento: 25 de dezembro de 2024 às 00:00:00
        const countDate = new Date(2024, 11, 25, 0, 0, 0).getTime();

        const x = setInterval(() => {
            const now = new Date().getTime();
            const gap = countDate - now;

            // Se o tempo acabar
            if (gap < 0) {
                clearInterval(x);
                document.getElementById('countdown').innerHTML = '<h3>Já Estamos Casados!</h3>';
                return;
            }

            // Calcular o tempo
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            // Calcular dias, horas, minutos e segundos
            const days = Math.floor(gap / day);
            const hours = Math.floor((gap % day) / hour);
            const minutes = Math.floor((gap % hour) / minute);
            const seconds = Math.floor((gap % minute) / second);

            // Atualizar o DOM
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;

        }, 1000);
    }

    countdown();

    // Simular efeito de hover nos dispositivos móveis
    // Simular efeito de hover nos dispositivos móveis
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.classList.add('hover-effect');
        });

        card.addEventListener('touchend', () => {
            card.classList.remove('hover-effect');
        });

        card.addEventListener('touchcancel', () => {
            card.classList.remove('hover-effect');
        });
    });
});
