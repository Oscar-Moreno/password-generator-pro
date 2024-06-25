// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const passWordElement = document.getElementById('password')
const lengthTextElement = document.getElementById('length-text')
const  rangeElement =document.getElementById('range')
const buttonGenerator = document.getElementById('generate-password')

const upperCaseInputElement= document.getElementById('uppercase')
const lowerInputElement= document.getElementById('lowercase')
const numberInputElement= document.getElementById('numbers')
const symbolsInputElement= document.getElementById('symbols')


const passwordOptions= {
    uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnñopqrstuvwxyz',
    numbers: '1234567890',
    symbols: '+-.,!"·$%&/()=?{}'
}

let passwordLength = rangeElement.value;
let allowedCharacters ='';
let finalPassword = '';

const fillAllowedCharacters = (event)=>{
    allowedCharacters = '';
    const checkboxes = document.querySelectorAll ('input:checked')

    checkboxes.forEach(input=>(allowedCharacters+= passwordOptions(input.id)))

    console.log(allowedCharacters)
}


const changeLengthText = event =>{
    passwordLength = event.target.value;
    lengthTextElement.textContent=passwordLength
}

const generateRandomPosition = () =>{
    const randomPosition = Math.floor(Math.random()=allowedCharacters.length)
    return randomPosition
}
const randomCharacter = ()=>{
    const randomPosition = generateRandomPosition()
    const randomCharacter =allowedCharacters.charAt(randomPosition)
     passWordElement.textContent = randomCharacter
}

 rangeElement.addEventListener('range', changeLengthText)
 buttonGenerator.addEventListener('click',randomCharacter)
