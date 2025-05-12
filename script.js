function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const includeLowerCase = document.getElementById("lowercase").checked;
  const includeUpperCase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  if (length <= 0) {
    alert("Password length must be at least 1");
    return;
  }

  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSymbols) {
    alert("Please select at least one character type.");
    return;
  }

  if (includeLowerCase) allowedChars += lowercaseChars;
  if (includeUpperCase) allowedChars += uppercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSymbols) allowedChars += symbolChars;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  document.getElementById("result").value = password;
}
