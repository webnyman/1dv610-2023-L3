import { StringFunctions } from "./StringFunctions.js";

class Fikonsprak {
  #charsToSkip = ['a', 'o', 'u', 'å', 'e', 'i', 'y', 'ä', 'ö', '.', ',', '!', '?', ' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  constructor() {
    this.stringFunctions = new StringFunctions()
  }

  translateToFikonSprak(textToTranslate) {
    if (this.stringFunctions.isStringEmpty(textToTranslate)) {
      throw new Error('Texten är tom')
    }
  
    const words = textToTranslate.split(/\s+/)
  
    const translatedWords = words.map(word => {
      if (this.stringFunctions.countNumberOfVowels(word) === 0) {
        throw new Error('Texten innehåller inga vokaler')
      } else {
        for (let i = 0; i < word.length; i++) {
          if (this.#charsToSkip.includes(word[i])) {
            return 'fi' + word.substring(i + 1).toLowerCase() + ' ' + word.substring(0, i + 1).toLowerCase() + 'kon'
          }
        }
      }
      return word
    })
  
    return translatedWords.join(' ')
  }
  

  translateFromFikonSprak (textToTranslate) {
    let translatedTextArray = []
    if (this.stringFunctions.isStringEmpty(textToTranslate)) {
      throw new Error('Texten är tom')
    } else if (this.isFikonSprak(textToTranslate) === false) {
      throw new Error('Texten är inte på fikonspråk')
    } else {
      translatedTextArray = textToTranslate.split(' ')
      return translatedTextArray[1].slice(0, 2) + translatedTextArray[0].substring(2)
    }
  }

  isFikonSprak (textToCheck) {
    textToCheck = textToCheck.toLowerCase()
    let isFikonSprak = true
    if (textToCheck.substring(0, 2) === 'fi' && textToCheck.substring(textToCheck.length - 3) === 'kon') {
      isFikonSprak = true
    } else if (this.stringFunctions.countNumberOfWords(textToCheck) !== 2) {
      isFikonSprak = false
    } else {
      isFikonSprak = false
    }
    return isFikonSprak
  }
}

export { Fikonsprak }
