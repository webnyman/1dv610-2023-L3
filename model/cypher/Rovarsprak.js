import { StringFunctions } from './StringFunctions.js'

class Rovarsprak {
  #charsToSkip = ['a', 'o', 'u', 'å', 'e', 'i', 'y', 'ä', 'ö', '.', ',', '!', '?', ' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  constructor () {
    this.stringFunctions = new StringFunctions()
  }

  translateToRovarSprak (textToTranslate) {
    let rovarSprak = ''
    if (this.validateTextInput(textToTranslate)) {
      for (let i = 0; i < textToTranslate.length; i++) {
        if (this.#charsToSkip.includes(textToTranslate[i])) {
          rovarSprak += textToTranslate[i]
        } else {
          rovarSprak += textToTranslate[i] + 'o' + textToTranslate[i].toLowerCase()
        }
      }
      return rovarSprak
    } else {
      throw new Error('Texten är tom eller innehåller ogiltiga tecken')
    }
  }

  translateFromRovarsprak (textToTranslate) {
    let decodedRovarSprak = ''
    if (this.isRovarSprak(textToTranslate) === false) {
      throw new Error('Texten är inte på rövarspråk')
    } else {
      for (let i = 0; i < textToTranslate.length; i++) {
        if (this.#charsToSkip.includes(textToTranslate[i])) {
          decodedRovarSprak += textToTranslate[i]
        } else {
          decodedRovarSprak += textToTranslate[i]
          i = i + 2
        }
      }
    }
    return decodedRovarSprak
  }

  validateTextInput (text) {
    const validRegEx = /^[A-Za-z0-9\s,.;:!?åöäÅÖÄ]+$/u
    if (text.match(validRegEx) === null || this.stringFunctions.isStringEmpty(text)) {
      return false
    } else {
      return true
    }
  }

  isRovarSprak (textToCheck) {
    textToCheck = textToCheck.toLowerCase()
    let isRovarSprak = true
    for (let i = 0; i < textToCheck.length; i++) {
      if (this.#charsToSkip.includes(textToCheck[i])) {
        isRovarSprak = true
      } else {
        if (textToCheck[i] === textToCheck[(i + 2)] && (textToCheck[(i + 1)]) === 'o') {
          isRovarSprak = true
          i = i + 2
        } else {
          isRovarSprak = false
          break
        }
      }
    }
    return isRovarSprak
  }
}

export { Rovarsprak }
