const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = lowerCase.toUpperCase()
const numbers = "1234567890"
const urlLength = 6
const collection = lowerCase.split("").concat(upperCase.split("").concat(numbers.split("")))


function randomGenerator() {
    let result = ""
    
    for(let i = 0; i < urlLength; i++){
        let randomNum = Math.floor(Math.random()*collection.length)
        result += collection[randomNum]
    }
    return result
}
//randomGenerator()
module.exports = randomGenerator
