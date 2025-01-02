const email = document.querySelector("#mail");
email.addEventListener('input', (event) =>{
    if(email.validity.typeMismatch){
        email.setCustomValidity("Enter a valid email address!");
    }
    else{
        email.setCustomValidity("");
    }
    email.reportValidity();
});