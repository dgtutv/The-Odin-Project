let button = document.querySelector("button");
let password = document.querySelector("#pwd");
let confirmPassword = document.querySelector("#confirmPwd");
let form = document.querySelector("form");
button.addEventListener('click', function(event){
    if(password.value === confirmPassword.value){
        form.submit();
    }
});