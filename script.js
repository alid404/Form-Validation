//#################### First Method#################//

document.addEventListener('DOMContentLoaded', () => {
        const formValidator = {
            validationRules: {
                name: {
                    regex: /^[a-zA-Z\s]{2,30}$/,
                    message: "Name must be 2-30 characters long and contain only letters"
                },
                email: {
                    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address"
                },
                phone: {
                    regex: /^\d{10}$/,
                    message: "Phone number must be exactly 10 digits"
                },
                address: {
                    regex: /^[a-zA-Z0-9\s,.'-]{5,100}$/,
                    message: "Please enter a valid address (5-100 characters)"
                },
                age: {
                    regex: /^(1[89]|[2-9]\d|100)$/,
                    message: "Age must be between 18 and 100"
                },
                gender: {
                    regex: /^(male|female|other)$/i,
                    message: "Please select a valid gender option"
                }
            },
    
            toggleError(field, show, message = '') {
                const errorDisplay = document.getElementById(`${field}Error`);
                const inputField = document.getElementById(field);
                
                if (show) {
                    errorDisplay.textContent = message;
                    errorDisplay.classList.remove('hidden');
                    inputField.classList.add('border-red-500');
                    inputField.classList.remove('border-green-500');
                } else {
                    errorDisplay.classList.add('hidden');
                    inputField.classList.remove('border-red-500');
                    inputField.classList.add('border-green-500');
                }
            },
    
            validateField(field, value) {
                const rule = this.validationRules[field];
                if (rule && !rule.regex.test(value)) {
                    this.toggleError(field, true, rule.message);
                    return false;
                } else {
                    this.toggleError(field, false);
                    return true;
                }
            }
        };
    
        document.getElementById("testForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let valid = true;
    
            // Loop through each field to validate
            for (let field in formValidator.validationRules) {
                const fieldValue = document.getElementById(field).value;
                const isFieldValid = formValidator.validateField(field, fieldValue);
                if (!isFieldValid) valid = false;
            }
    
            // If all validations pass
            if (valid) {
                alert("Form submitted successfully!");
            }
        });
    }); */


//#################### Second Method#################//


document.getElementById("testForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById("name").value;
    if (name === "") {
        valid = false;
        document.getElementById("nameError").classList.remove("hidden");
    } else {
        document.getElementById("nameError").classList.add("hidden");
    }

    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        valid = false;
        document.getElementById("emailError").classList.remove("hidden");
    } else {
        document.getElementById("emailError").classList.add("hidden");
    }

    const phone = document.getElementById("phone").value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        valid = false;
        document.getElementById("phoneError").classList.remove("hidden");
    } else {
        document.getElementById("phoneError").classList.add("hidden");
    }

    const address = document.getElementById("address").value;
    if (address === "") {
        valid = false;
        document.getElementById("addressError").classList.remove("hidden");
    } else {
        document.getElementById("addressError").classList.add("hidden");
    }

    const age = document.getElementById("age").value;
    if (age < 18 || age > 100) {
        valid = false;
        document.getElementById("ageError").classList.remove("hidden");
    } else {
        document.getElementById("ageError").classList.add("hidden");
    }

    const gender = document.getElementById("gender").value;
    if (gender === "") {
        valid = false;
        document.getElementById("genderError").classList.remove("hidden");
    } else {
        document.getElementById("genderError").classList.add("hidden");
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
}); 
