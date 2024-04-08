'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content');

    let clickPoints = 5;
    let coefficient = 5;

    document.addEventListener('click', e => {
        const x = e.clientX;
        const y = e.clientY;

        const visualDigit = document.createElement('span');
        visualDigit.className = 'flying-digit';
        visualDigit.style.top = `${y - 20}px`;
        visualDigit.style.left = `${x - 20}px`;

        visualDigit.innerText = `${clickPoints} ₽`;
        mainContent.insertAdjacentElement('beforeend', visualDigit);

        setTimeout(() => visualDigit.style.top = `${y - 40}px`, 10);
        setTimeout(() => visualDigit.remove(), 700);
    });
});
