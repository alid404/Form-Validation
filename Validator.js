const validationRules = {
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
};

function toggleError(field, show, message = '') {
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
}

function validateField(field, value) {
    const rule = validationRules[field];
    if (rule && !rule.regex.test(value)) {
        toggleError(field, true, rule.message);
        return false;
    } else {
        toggleError(field, false);
        return true;
    }
}

function validateForm(form) {
    let valid = true;

    for (let field in validationRules) {
        const fieldValue = document.getElementById(field).value;
        const isFieldValid = validateField(field, fieldValue);
        if (!isFieldValid) valid = false;
    }

    return valid;
}

export default { validateForm, validateField, toggleError };
