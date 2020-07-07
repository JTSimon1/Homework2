const characterAmountRange= document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSpecialElement = document.getElementById('includeSpecial')
const form = document.getElementById('passwordGenerator')
const passwordDisplay = document.getElementById('passwordDisplay')
// Im using const instead of var or let because these should stay constant throughout the script (meaning not to change)

// This code is for creating arrays of the different characters using a character codes list that I found 
const UPPERCASE_CHAR_CODES=arrayFromHighToLow(65,90)
const LOWERCASE_CHAR_CODES=arrayFromHighToLow(97,122)
const NUMBER_CHAR_CODES=arrayFromHighToLow(48,57)
const SPECIAL_CHAR_CODES=arrayFromHighToLow(33,47).concat(
    arrayFromHighToLow(58,64)
    ).concat(arrayFromHighToLow(91,96)
    ).concat(arrayFromHighToLow(123, 126)
    )
    // I am using concat to add more to this array since the symbols that I want to use are all around the character codes list. 


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)
// this is the input for the number of characters

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    // this is going to tell us if the upper case box is checked (true or false)
    const includeNumbers = includeNumbersElement.checked
    const includeSpecial = includeSpecialElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecial)
    // this line of code checks all the elements if they are checked (true or false) if they are then it will activate the line of code that is needed

    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecial){
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSpecial) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        // made sure that the numbers used in the passwords are integers by using Math.floor
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
    // this pushes the randoom characters out as a string to an array 
}

function arrayFromHighToLow(low, high){
    const array = []
    for(let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}
// this function activates the number of characters that the person wants and syncs the character amount with the javaScript
