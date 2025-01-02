const email = document.querySelector("#mail");
email.addEventListener('input', (event) =>{
    if(email.validity.typeMismatch){
        email.setCustomValidity("Enter a valid email address.");
    }
    else{
        email.setCustomValidity("");
    }
    email.reportValidity();
});

const country = document.querySelector("#country");
country.addEventListener('input', (event) =>{
    if(country.validity.valueMissing){
        country.setCustomValidity("Country is required.")
    }
    else if(country.validity.tooShort){
        country.setCustomValidity("Country length must be longer than 1.");
    }
    else if(country.validity.tooLong){
        country.setCustomValidity("Country length must be shorter than 30.");
    }
    else{
        country.setCustomValidity("");
    }
    country.reportValidity();
});

const postalCode = document.querySelector("#postalCode");
postalCode.addEventListener('input', (event)=>{
    if(postalCode.validity.valueMissing){
        postalCode.setCustomValidity("Postal code is required.");
    }
    else if(postalCode.validity.patternMismatch){
        postalCode.setCustomValidity("Enter a valid postal code.");
    }
    else{
        postalCode.setCustomValidity("");
    }
    postalCode.reportValidity();
});