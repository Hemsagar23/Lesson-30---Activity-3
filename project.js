const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");
const error = document.getElementById("error");

// 1. Calculation function
function isAdult(age) {
    return age >= 18;
}

// --- Validations with Constraint Validation API ---

// Name
nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
        nameInput.setCustomValidity("Name is required.");
    } else {
        nameInput.setCustomValidity("");
    }
});

// Age
ageInput.addEventListener("input", () => {
    const age = parseInt(ageInput.value);
    if (!isAdult(age)) {
        ageInput.setCustomValidity("You must be at least 18 years old.");
    } else {
        ageInput.setCustomValidity("");
    }
});

// Phone
phoneInput.addEventListener("input", () => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Phone must be exactly 10 digits.");
    } else {
        phoneInput.setCustomValidity("");
    }
});

// Final validation on submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        error.textContent = "";
        alert("Form submitted!\nName: " + nameInput.value +
            "\nAge: " + ageInput.value +
            "\nPhone: " + phoneInput.value);
        form.reset();
    } else {
        error.textContent =
            nameInput.validationMessage ||
            ageInput.validationMessage ||
            phoneInput.validationMessage;
    }
});
