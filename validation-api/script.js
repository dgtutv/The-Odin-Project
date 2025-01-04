const email = document.querySelector("#mail");
email.addEventListener('input', emailValidity);

function emailValidity() {
    let isValid = true;
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Enter a valid email address.");
        isValid = false;
    } else {
        email.setCustomValidity("");
    }
    email.reportValidity();
    return isValid;
}

const country = document.querySelector("#country");
country.addEventListener('input', countryValidity);

function countryValidity() {
    let isValid = true;
    if (country.validity.valueMissing) {
        country.setCustomValidity("Country is required.");
        isValid = false;
    } else if (country.validity.tooShort) {
        country.setCustomValidity("Country length must be longer than 1.");
        isValid = false;
    } else if (country.validity.tooLong) {
        country.setCustomValidity("Country length must be shorter than 30.");
        isValid = false;
    } else {
        country.setCustomValidity("");
    }
    country.reportValidity();
    return isValid;
}

const postalCode = document.querySelector("#postalCode");
postalCode.addEventListener('input', postalCodeValidity);

function postalCodeValidity() {
    let isValid = true;
    if (postalCode.validity.valueMissing) {
        postalCode.setCustomValidity("Postal code is required.");
        isValid = false;
    } else if (postalCode.validity.patternMismatch) {
        postalCode.setCustomValidity("Enter a valid postal code.");
        isValid = false;
    } else {
        postalCode.setCustomValidity("");
    }
    postalCode.reportValidity();
    return isValid;
}

const password = document.querySelector("#password");
password.addEventListener('input', passwordValidity);

function passwordValidity() {
    let isValid = true;
    if (password.validity.valueMissing) {
        password.setCustomValidity("Password is required.");
        isValid = false;
    } else if (password.validity.tooShort) {
        password.setCustomValidity("Password length must be longer than 1.");
        isValid = false;
    } else if (password.validity.tooLong) {
        password.setCustomValidity("Password length must be shorter than 30.");
        isValid = false;
    } else {
        password.setCustomValidity("");
    }
    password.reportValidity();
    return isValid;
}

const confirmPassword = document.querySelector("#confirmPassword");
confirmPassword.addEventListener('input', confirmPasswordValidity);

function confirmPasswordValidity() {
    let isValid = true;
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords must be the same.");
        isValid = false;
    } else {
        confirmPassword.setCustomValidity("");
    }
    confirmPassword.reportValidity();
    return isValid;
}

const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    if (!emailValidity() || !countryValidity() || !postalCodeValidity() || !passwordValidity() || !confirmPasswordValidity()) {
        event.preventDefault();
    }
});