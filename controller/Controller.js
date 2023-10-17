import { Cipher } from '../model/cipher_module.js'
import { View } from '../view/View.js'
import { UserCipher } from '../model/UserCipher.js'
import { CipherHistory } from '../model/CipherHistory.js'

class Controller {

  #ENCODE_BUTTON_SELECTOR = '#encodeButton'
  #ACTION_TYPE_SELECTOR = 'input[name="actionType"]'
  #TYPE_OF_CIPHER_SELECTOR = 'input[name="typeOfCipher"]:checked'
  #TEXT_TO_CONVERT_SELECTOR = '#textToConvert'
  #IS_ENCODE_SELECTOR = '#cipher'
  #TEXT_SPAN_SELECTOR = '#typeOfAction'
  #HEADER_RESULT_SELECTOR = '#headerResult'
  #DISPLAY_RESULT_SELECTOR = '#displayResult'

  constructor() {
    this.cipher = Cipher
    this.view = new View()
    this.cipherHistory = new CipherHistory()

    this.#registerEventListeners()
  }

  #registerEventListeners() {
    this.view.getElementFromDOM(this.#ENCODE_BUTTON_SELECTOR).addEventListener('click', (event) => {
      this.#handleButtonClick(event)
    })
    this.view.getElementsFromDOM(this.#ACTION_TYPE_SELECTOR).forEach(element => {
      element.addEventListener('change', (event) => {
        this.#changeActionText(event.target.value)
      })
    })
  }

  #handleButtonClick(event) {
    event.preventDefault()
    let result = ''
    if (this.#isEncode()) {
      try {
        result = this.cipher[this.#getCipherToUse()].to(this.#getInputText())
        this.#clearResultInView()
        this.view.clearHistoryTable()

        this.#addCipherToHistory(this.#getInputText(), this.#getCipherToUse(), result)
        this.#updateHistoryTable()

        this.#updateResultInView(result)

      } catch (error) {
        this.#sendFlashMessage(error.message)
      }
    } else {
      try {
        result = this.cipher[this.#getCipherToUse()].from(this.#getInputText())

        this.#clearResultInView()
        this.view.clearHistoryTable()

        this.#addCipherToHistory(this.#getInputText(), this.#getCipherToUse(), result)
        this.#updateHistoryTable()

        this.#updateResultInView(result)
        
      } catch (error) {
        this.#sendFlashMessage(error.message)
      }
    }
  }

  #isEncode() {
    return this.view.getElementFromDOM(this.#IS_ENCODE_SELECTOR).checked
  }
  #getCipherToUse() {
    return this.view.getElementFromDOM(this.#TYPE_OF_CIPHER_SELECTOR).value
  }
  #getInputText() {
    return this.view.getElementFromDOM(this.#TEXT_TO_CONVERT_SELECTOR).value
  }
  #sendFlashMessage(message) {
    this.#clearResultInView()
    this.view.displayFlashMessage(message)
  }
  #updateResultInView(result) {
    this.view.updateElementContent(this.#HEADER_RESULT_SELECTOR, 'Resultat:')
    this.view.updateElementContent(this.#DISPLAY_RESULT_SELECTOR, result)
  }
  #updateHistoryTable() {
    this.view.renderHistoryTable(this.cipherHistory.getCipherHistory())
  }
  #addCipherToHistory(textToTranslate, typeOfCipher, result) {
    const userCipher = new UserCipher(textToTranslate, typeOfCipher, result)
    this.cipherHistory.addCipherToHistory(userCipher)
  }
  #clearResultInView() {
    this.view.updateElementContent(this.#HEADER_RESULT_SELECTOR, '')
    this.view.updateElementContent(this.#DISPLAY_RESULT_SELECTOR, '')
  }

  #changeActionText(actionType) {
    (actionType === 'cipher') ? this.#updateElementsToEncode() : this.#updateElementsToDecode()
  }
  #updateElementsToEncode() {
    this.view.updateElementContent(this.#TEXT_SPAN_SELECTOR, 'chiffrera')
    this.view.updateElementContent(this.#ENCODE_BUTTON_SELECTOR, 'Chiffrera text')
  }
  #updateElementsToDecode() {
    this.view.updateElementContent(this.#TEXT_SPAN_SELECTOR, 'dechiffrera')
    this.view.updateElementContent(this.#ENCODE_BUTTON_SELECTOR, 'Dechiffrera text')
  }
}

export { Controller }
