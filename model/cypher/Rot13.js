import { StringFunctions } from './StringFunctions.js'

class Rot13 {
  #alphabet = 'abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'
  #rot13Cipher = 'nopqrstuvwxyzåäöabcdefghijklmNOPQRSTUVWXYZÅÄÖABCDEFGHIJKLM'
  
  constructor () {
    this.stringFunctions = new StringFunctions()
  }

  encodeToROT13 (text) {
    let encryptedText = ''
    if (this.stringFunctions.isStringEmpty(text)) {
      return 'Texten är tom'
    } else {
      encryptedText = text.replace(/[a-zåäö]/gi, letter => this.#rot13Cipher[this.#alphabet.indexOf(letter)])
      return encryptedText
    }
  }

  decodeFromROT13 (text) {
    let decryptedText = ''
    if (this.stringFunctions.isStringEmpty(text)) {
      return 'Texten är tom'
    } else {
      decryptedText = text.replace(/[a-zåäö]/gi, letter => this.#alphabet[this.#rot13Cipher.indexOf(letter)])
      return decryptedText
    }
  }
}

export { Rot13 }
