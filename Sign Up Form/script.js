let button = document.querySelector("button");
let password = document.querySelector("#pwd");
let confirmPassword = document.querySelector("#confirmPwd");
let form = document.querySelector("form");
let passwordsNotMatch = document.querySelector("#pwdNotMatch");
password.addEventListener('change', function(event){
    if(password.value === confirmPassword.value){
        passwordsNotMatch.classList.add("hidden");
    }
    else{
        if(passwordsNotMatch.classList.contains("hidden")){
            passwordsNotMatch.classList.remove("hidden");
        }    
    }
});
confirmPassword.addEventListener('change', function(event){
    if(password.value === confirmPassword.value){
        passwordsNotMatch.classList.add("hidden");
    }
    else{
        if(passwordsNotMatch.classList.contains("hidden")){
            passwordsNotMatch.classList.remove("hidden");
        }    
    }
});
button.addEventListener('click', function(event){
    if(password.value === confirmPassword.value){
        form.submit();
    }
});