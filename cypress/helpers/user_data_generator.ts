export function generateRandomUsername(): string {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let username = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    username += letters[randomIndex];
  }

  const randomNumber = Math.floor(Math.random() * 1000);
  return username + randomNumber;
}

export function generateRandomPassword(length = 12): string {
  const lettersLower = "abcdefghijklmnopqrstuvwxyz";
  const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";
  
  const allChars = lettersLower + lettersUpper + numbers + symbols;
  
  let password = "";
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  
  return password;
}