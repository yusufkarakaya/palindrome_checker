const checkButtonElement = document.getElementById('checkButton');
const inputElement = document.getElementById('input');
const resultElement = document.getElementById('result');

function checkPalindrome(inputValue) {
  if (inputValue === '') {
    return null;
  }
  const reversedValue = inputValue.split('').reverse().join('');
  return inputValue === reversedValue;
}

checkButtonElement.addEventListener('click', () => {
  const inputValue = inputElement.value;
  const modifiedreversedValue = inputValue.replace(/\s+/g, '');
  const isPalindrome = checkPalindrome(modifiedreversedValue);
  if (isPalindrome) {
    resultElement.textContent = 'Yes, it is a palindrome';
  } else if (isPalindrome === null) {
    resultElement.textContent = 'Please enter a value';
  } else {
    resultElement.textContent = 'No, it is not a palindrome';
  }
});
