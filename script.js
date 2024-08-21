// script.js
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials (you can replace this with your own logic)
    if (username === 'myuser' && password === 'mypassword') {
        alert('Login successful!');
        // Redirect to another page or perform other actions
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
