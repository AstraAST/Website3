document.addEventListener('DOMContentLoaded', () => {
    const welcomeButton = document.getElementById('welcomeButton');
    const welcomeMessage = document.getElementById('welcomeMessage');

    welcomeButton.addEventListener('click', () => {
        welcomeMessage.textContent = 'Welcome!';
    });
});