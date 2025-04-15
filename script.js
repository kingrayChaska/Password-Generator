function generatePassword(length = 8) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*()_+][]";

  const allChars = lowercase + uppercase + numbers + symbols;

  if (typeof length !== "number" || length <= 0) {
    throw new Error("Length must be a positive integer");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

console.log("Password Generator");
for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}. ${generatePassword()}`);
}
console.log("====================");
