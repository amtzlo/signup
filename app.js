let passwordInput = document.getElementById('password');
let passwordValidationInput = document.getElementById('password-validation');

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.trim().length > 0) {
        passwordInput.classList.remove('error');
    } else {
        passwordInput.classList.add('error');
    }
});

passwordValidationInput.addEventListener('input', () => {
    if (passwordValidationInput.value.trim().length >0) {
        passwordValidationInput.classList.remove('error');
    }
    else{
        passwordValidationInput.classList.add('error');
    }
});