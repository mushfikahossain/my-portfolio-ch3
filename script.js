document.addEventListener('DOMContentLoaded', () => {
    const showButtons = document.querySelectorAll('.showButton');
    showButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                button.textContent = 'Hide Details';
            } else {
                details.style.display = 'none';
                button.textContent = 'Details';
            }
        });
    });

    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (event) => {
        let valid = true;
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        messageError.textContent = '';

        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required';
            valid = false;
        }

        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            emailError.textContent = 'Email is required';
            valid = false;
        }

        if (!phoneInput.value.trim() || !validatePhone(phoneInput.value)) {
            phoneError.textContent = 'Phoen Number is required';
            valid = false;
        }

        if (!messageInput.value.trim()) {
            messageError.textContent = 'Message is requird';
            valid = false;
        }

        if (valid) {
            successMessage.textContent = 'From susmitted successfully';
            form.reset();
        }
        event.preventDefault();
    });

    
});
