function validate(password){
    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasDigit = /\d/.test(password);
    let hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
if (password.length < 8) {
    console.log('Password lenght must be atleast 8 characters long');
}
if (!hasUppercase || !hasLowercase || !hasDigit || !hasSpecialChars) {
    console.log("Password must include uppercase, lowercase, digits, and special characters");
}else{
    console.log("Password is valid");
}
console.log(`-------------`);
}
 validate("sanket")
 validate("Sanket@26")
 validate("sanket@26")
 validate("SANKET@26")
 validate("Sanket26")
 validate("Sanket@ch")


