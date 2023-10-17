import { Cipher } from '../model/cipher_module.js'
import { View } from '../view/View.js'

class Controller {
  constructor() {
    this.cipher = Cipher
    this.view = new View()

    // Eventlisteners
    this.view.getElementFromDOM('#encodeButton').addEventListener('click' , (event) => {
      this.#handleButtonClick(event)
    })
    this.view.getElementsFromDOM('input[name="actionType"]').forEach(element => {
      element.addEventListener('change', (event) => {
        this.changeActionText(event.target.value)
      })
    })
  }
  
  #handleButtonClick(event) {
    event.preventDefault()
    let result = ''

    if (this.#isEncode()) {
      try {
        result = this.cipher[this.#getcipherToUse()].to(this.#getInputText())
        this.#updateResultInView(result)
      } catch (error) {
        if (error) {
          this.#sendFlashMessage('Ett fel uppstod vid chiffreringen: ' + error.message)
        }
      }
    } else {
      try {
        result = this.cipher[this.#getcipherToUse()].from(this.#getInputText())
        this.#updateResultInView(result)
      } catch (error) {
        if (error) {
          this.#sendFlashMessage('Ett fel uppstod vid dechiffreringen: ' + error.message)
        }
      }
    }
  }
  
  #isEncode() {
    return this.view.getElementFromDOM('#cipher').checked
  }
  #getcipherToUse() {
    return this.view.getElementFromDOM('input[name="typeOfCipher"]:checked').value
  }
  #getInputText() {
    return this.view.getElementFromDOM('#textToConvert').value
  }
  #sendFlashMessage(message) {
    this.#clearResultInView()
    this.view.displayFlashMessage(message)
  }
  #updateResultInView(result) {
    this.#clearResultInView()
    this.view.updateElementContent('#headerResult', 'Resultat:')
    this.view.updateElementContent('#displayResult', result)
  }
  #clearResultInView() {
    this.view.updateElementContent('#headerResult', '')
    this.view.updateElementContent('#displayResult', '')
  }

  changeActionText(actionType) {
    (actionType === 'cipher') ? this.updateElementsToEncode() : this.updateElementsToDecode()
  }
  updateElementsToEncode() {
    this.view.updateElementContent('#typeOfAction', 'chiffrera')
    this.view.updateElementContent('#encodeButton', 'Chiffrera text')
  }
  updateElementsToDecode() {
    this.view.updateElementContent('#typeOfAction', 'dechiffrera')
    this.view.updateElementContent('#encodeButton', 'Dechiffrera text')
  }
}

export { Controller }
