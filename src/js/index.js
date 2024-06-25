// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const passwordElement = document.getElementById('password');
const lengthTextElement = document.getElementById('length-text');
const rangeElement = document.getElementById('range');
const buttonGenerateElement = document.getElementById('generate-password');

const uppercaseInputElement = document.getElementById('uppercase');
const lowercaseInputElement = document.getElementById('lowercase');
const numbersInputElement = document.getElementById('numbers');
const symbolsInputElement = document.getElementById('symbols');

const passwordOptions = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-={}[]:;<>,.?/'
};

let passwordLength = rangeElement.value;
let allowedCharacters = '';
let finalPassword = '';

const setDisabledButton = () => {
  buttonGenerateElement.disabled = !allowedCharacters.length;
};

const fillAllowedCharacters = () => {
  allowedCharacters = '';
  const checkboxes = document.querySelectorAll('input:checked');

  if (checkboxes.length === 0) {
    return;
  }

  checkboxes.forEach(input => (allowedCharacters += passwordOptions[input.id]));

  console.log(allowedCharacters);

  setDisabledButton();
};

const changeLengthText = event => {
  passwordLength = event.target.value;
  lengthTextElement.textContent = passwordLength;
};

const generateRandomPosition = () => {
  const randomPosition = Math.floor(Math.random() * allowedCharacters.length);
  return randomPosition;
};

const getRandomCharacter = () => {
  const randomPosition = generateRandomPosition();
  const randomCharacter = allowedCharacters.charAt(randomPosition);
  return randomCharacter;
};

const generatePassword = () => {
  finalPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomCharacter = getRandomCharacter();
    finalPassword += randomCharacter;
  }

  passwordElement.value = finalPassword;
};

rangeElement.addEventListener('input', changeLengthText);
buttonGenerateElement.addEventListener('click', generatePassword);

uppercaseInputElement.addEventListener('change', fillAllowedCharacters);
lowercaseInputElement.addEventListener('change', fillAllowedCharacters);
numbersInputElement.addEventListener('change', fillAllowedCharacters);
symbolsInputElement.addEventListener('change', fillAllowedCharacters);