const form = document.querySelector('form'); 

function isPhoneNumberValid(str) {
    const cleanStr = str.replace(/[\s-]/g, ''); 
    return cleanStr.length >= 10 && /^\d+$/.test(cleanStr); 
}

function displayError(inputElement, message) {
    const parentDiv = inputElement.closest('.input-area') || inputElement.closest('.check-area');
    
    let errorElement = parentDiv.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('p');
        errorElement.className = 'error-message';
        parentDiv.appendChild(errorElement); 
    }
    
    errorElement.innerText = message;
    
    if (message) {
        inputElement.classList.add('invalid');
    } else {
        inputElement.classList.remove('invalid');
    }
}

function validateForm(e) {
    e.preventDefault();
    let isValid = true;
    
    document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
    document.querySelectorAll('.error-message').forEach(el => el.innerText = '');

    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const cpasswordInput = document.getElementById('cpassword');
    const phoneInput = document.getElementById('phone'); 
    const countrySelect = document.getElementById('country');
    const maleRadio = document.getElementById('radio-male');
    const femaleRadio = document.getElementById('radio-female');
    
    const hobbiesCheckboxes = [
        document.getElementById('watching'),
        document.getElementById('reading'),
        document.getElementById('sports'),
        document.getElementById('gaming'),
        document.getElementById('traveling')
    ];
    
    const termsCheck = document.getElementById('terms');
    
    if (fullnameInput.value.trim() === '') {
        displayError(fullnameInput, 'Full Name: Cannot be empty.');
        isValid = false;
    } else {
        displayError(fullnameInput, '');
    }
    
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (emailValue === '') {
        displayError(emailInput, 'Email: Must not be empty.');
        isValid = false;
    } else if (!emailPattern.test(emailValue)) {
        displayError(emailInput, 'Email: Must be in correct email format (e.g., name@example.com).');
        isValid = false;
    } else {
        displayError(emailInput, '');
    }
    
    const passwordValue = passwordInput.value;
    if (passwordValue === '') {
        displayError(passwordInput, 'Password: Must not be empty.');
        isValid = false;
    } else if (passwordValue.length < 6) {
        displayError(passwordInput, 'Password: Minimum 6 characters.');
        isValid = false;
    } else {
        displayError(passwordInput, '');
    }
    
    if (cpasswordInput.value === '') {
        displayError(cpasswordInput, 'Confirm Password: Must not be empty.');
        isValid = false;
    } else if (cpasswordInput.value !== passwordValue) {
        displayError(cpasswordInput, 'Confirm Password: Must match the Password.');
        isValid = false;
    } else {
        displayError(cpasswordInput, '');
    }

    const phoneValue = phoneInput.value;
    if (phoneValue === '') {
        displayError(phoneInput, 'Phone: Cannot be empty.');
        isValid = false;
    } else if (!isPhoneNumberValid(phoneValue)) {
        displayError(phoneInput, 'Phone: Only numbers, minimum 10 digits.');
        isValid = false;
    } else {
        displayError(phoneInput, '');
    }

    const genderContainer = maleRadio.closest('.check-area'); 
    if (!maleRadio.checked && !femaleRadio.checked) {
        displayError(genderContainer, 'Gender: Must select one option.');
        isValid = false;
    } else {
        displayError(genderContainer, '');
    }

    const hobbiesContainer = document.querySelector('.hobbies').closest('.check-area');
    const isHobbySelected = hobbiesCheckboxes.some(checkbox => checkbox.checked);
    
    if (!isHobbySelected) {
        displayError(hobbiesContainer, 'Hobbies: At least one option should be selected.');
        isValid = false;
    } else {
        displayError(hobbiesContainer, '');
    }
    
    if (countrySelect.selectedIndex === 0) {
        displayError(countrySelect, 'Country: Cannot leave the default option selected.');
        isValid = false;
    } else {
        displayError(countrySelect, '');
    }
    
    const termsContainer = termsCheck.closest('div');
    if (!termsCheck.checked) {
        displayError(termsContainer, 'Terms and Conditions: The checkbox must be checked.');
        isValid = false;
    } else {
        displayError(termsContainer, '');
    }

    if (isValid) {
        alert('Registration Successful!');
        form.submit(); 
    }
}

form.addEventListener('submit', validateForm);
