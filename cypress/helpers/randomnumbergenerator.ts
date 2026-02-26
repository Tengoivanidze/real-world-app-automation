export function generateRandomBankUsername(): string {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const minLetters = 5; // მინიმუმ 5 ასო
  const maxLetters = 8; // მაქსიმუმ 8 ასო
  const letterCount = Math.floor(Math.random() * (maxLetters - minLetters + 1)) + minLetters;
  
  let username = "";

  for (let i = 0; i < letterCount; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    username += letters[randomIndex];
  }

  return username;
}

export function generateRandomRoutingNumber(): string {
  const digits = "0123456789";
  const length = 9; // ზუსტად 9 ციფრი
  let routingNumber = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    routingNumber += digits[randomIndex];
  }

  return routingNumber;
}

export function generateRandomAccountNumber(): string {
  const digits = "0123456789";
  const length = 9; // ზუსტად 9 ციფრი
  let routingNumber = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    routingNumber += digits[randomIndex];
  }

  return routingNumber;
}