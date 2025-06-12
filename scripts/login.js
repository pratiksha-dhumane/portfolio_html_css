// script.js
function login() {
    const mobileInput = document.getElementById('mobile');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');

    const mobile = mobileInput.value;
    const password = passwordInput.value;

    if (mobile === '1234567890' && password === '123') {
        messageElement.textContent = 'Login successful!';
    } else {
        messageElement.textContent = 'Login failed. Please check your mobile and password.';
    }
}