const cartas = document.querySelectorAll('.card');

cartas.forEach(carta => {
    carta.addEventListener('mousemove', (event) => {
        const { clientX, clientY, target } = event;
        const { left, top, width, height } = target.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        const rotateX = (deltaY / 10);
        const rotateY = (-deltaX / 10);

        carta.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.05)`;
    });

    carta.addEventListener('mouseleave', () => {
        carta.style.transform = `perspective(600px) rotateX(0) rotateY(0) translateY(0) scale(1)`;
    });
});

const buttonCurso = document.querySelector('.buttom-curso');

buttonCurso.addEventListener('mousemove', (event) => {
    const { clientX, clientY, target } = event;
    const { left, top, width, height } = target.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const rotateX = (deltaY / 10);
    const rotateY = (-deltaX / 10);

    carta.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.05)`;
});

carta.addEventListener('mouseleave', () => {
    carta.style.transform = `perspective(600px) rotateX(0) rotateY(0) translateY(0) scale(1)`;
}); 