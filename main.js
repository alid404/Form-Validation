import formValidator from './formValidator.js';

document.addEventListener('DOMContentLoaded', () => {
    // Form submit event
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const valid = formValidator.validateForm(this);

        if (valid) {
            alert("Form submitted successfully!");
        }
    });
});
