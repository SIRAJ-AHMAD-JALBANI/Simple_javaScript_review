function generatePassword(password_length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let output = "";

  for (let i = 0; i < password_length; i++) {
    output += chars[Math.floor(Math.random() * chars.length)];
  }

  return output;
}

const password = generatePassword(7);
console.log(`Generated password: ${password}`);
