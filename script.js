const form = document.getElementById('form-container');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkUsername() {
  const usernameInput = document.getElementById('input-username');
  let username = usernameInput.value;

  if (username === "") {
    alert("username must not be empty");
    return false;
  }
  if (username.length < 4) {
    alert("username length must be above 4");
    return false;
  }
  return true;
}

function checkEmail() {
  const emailInput = document.getElementById('input-email');
  let email = emailInput.value.trim();

  if (email === "") {
    alert("Email must not be empty."); 
    return false;
  }
  
  if (!emailRegex.test(email)) {
    alert("Email must be a valid email format (e.g., user@domain.com)."); 
    return false;
  }
  
  if (email.startsWith('@') || email.startsWith('.')) { 
    alert("Email must not start with '@' or '.'.");
    return false;
  }
  if (email.endsWith('.')) { 
    alert("Email must not end with '.'.");
    return false;
  }
  if (email.includes(' ')) { 
    alert("Email must not contain spaces.");
    return false;
  }

  const parts = email.split('@');
  if (parts.length === 2) {
    const domainParts = parts[1].split('.');
    if (domainParts.length < 2 || domainParts[0].length === 0) {
      alert("Email must have a valid domain structure.");
      return false;
    }
  }
  return true;
}

function checkPassword() {
  const passwordInput = document.getElementById('input-password');
  let password = passwordInput.value;

  if (password === "") {
    alert("Password must not be empty."); //
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long."); //
    return false;
  }
  return true;
}

function checkConfirmPassword() {
  const passwordInput = document.getElementById('input-password');
  const cPasswordInput = document.getElementById('input-cpassword');
  let password = passwordInput.value;
  let cPassword = cPasswordInput.value;

  if (cPassword === "") {
    alert("Confirm Password must not be empty."); 
    return false;
  }
  if (cPassword !== password) {
    alert("Confirm Password must match the password."); 
    return false;
  }
  return true;
}

function checkDateOfBirth() {
  const dobInput = document.getElementById('input-dob');
  let dobString = dobInput.value;

  if (dobString === "") {
    alert("Date of Birth must not be empty."); // Anggap validasi ini juga berlaku
    return false;
  }

  const dob = new Date(dobString);
  const today = new Date();
  
  // Hitung usia dalam tahun
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  
  // Sesuaikan jika tanggal ulang tahun belum tiba di tahun ini
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  if (age < 13) {
    alert("Date of Birth: Must be older than 13 years old."); //
    return false;
  }
  return true;
}

function checkGender() {
  const maleRadio = document.getElementById('radio-male');
  const femaleRadio = document.getElementById('radio-female');

  if (!maleRadio.checked && !femaleRadio.checked) {
    alert("Gender: One option must be selected."); //
    return false;
  }
  return true;
}

function checkTerms() {
  const agreeCheckbox = document.getElementById('input-agree');

  if (!agreeCheckbox.checked) {
    alert("Terms and Conditions: The checkbox must be checked."); //
    return false;
  }
  return true;
}

// --- Event Listener untuk Submit Formulir ---

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah pengiriman formulir default

  // Jalankan semua validasi secara berurutan dan hentikan jika ada yang gagal.
  // Urutan validasi penting untuk menentukan pesan kesalahan mana yang akan muncul terlebih dahulu.
  if (
    checkUsername() &&
    checkEmail() &&
    checkPassword() &&
    checkConfirmPassword() &&
    checkDateOfBirth() &&
    checkGender() &&
    checkTerms()
  ) {
    alert("Success Register! Data Anda siap dikirim.");
    // Di sini Anda bisa menambahkan kode untuk mengirim data (misalnya, menggunakan Fetch API)
    // form.submit(); // Jika ingin melanjutkan pengiriman formulir standar setelah sukses
  }
});

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   let isValid = true;

//   isValid = checkUsername() && isValid;

//   if (isValid === true) {
//     alert("success register");
//   }
// });
