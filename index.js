const checkButtonElement = document.getElementById('checkButton');
const inputElement = document.getElementById('input');
const resultElement = document.getElementById('result');

function checkPalindrome(inputValue) {
  if (inputValue === '') {
    return null; // Return null if the input is empty
  }
  const reversedValue = inputValue.split('').reverse().join('');
  return inputValue === reversedValue;
}

checkButtonElement.addEventListener('click', () => {
  // Remove all non-alphanumeric characters and convert to lowercase
  const modifiedInputValue = inputElement.value
    .replace(/[^A-Za-z0-9]/g, '')
    .toLowerCase();
  console.log(modifiedInputValue); // Log the sanitized input for debugging
  const isPalindrome = checkPalindrome(modifiedInputValue);

  if (isPalindrome) {
    resultElement.textContent = 'Yes, it is a palindrome';
  } else if (isPalindrome === null) {
    resultElement.textContent = 'Please enter a value';
  } else {
    resultElement.textContent = 'No, it is not a palindrome';
  }
});
