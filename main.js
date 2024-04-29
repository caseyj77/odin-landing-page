
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');

// Function to check password length and apply shadow
function validatePasswordLength(inputElement) {
    if (inputElement.value.length < 3) {
        inputElement.style.boxShadow = '3px 3px 5px red';
    } else {
        inputElement.style.boxShadow = 'none';
    }
}

// Event listener to validate password input
passwordInput.addEventListener('input', function() {
    validatePasswordLength(this);
});

confirmPasswordInput.addEventListener('input', function() {
    validatePasswordLength(this);
});

