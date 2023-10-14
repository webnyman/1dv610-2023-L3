import { Cypher } from '../model/cypher_module.js'
import { View } from '../view/View.js'

class Controller {
  constructor(model, view) {
    this.cypher = model
    this.view = view

    // Eventlisteners
    this.view.getElementFromDOM('#encodeButton').addEventListener('click' , (event) => {
      this.handleButtonClick(event)
    })
    this.view.getElementsFromDOM('input[name="actionType"]').forEach(element => {
      element.addEventListener('change', (event) => {
        this.changeActionText(event.target.value)
      })
    })
  }
  
  handleButtonClick(event) {
    event.preventDefault()
    let result = ''

    if (this.isEncode()) {
      try {
        result = this.cypher[this.getcypherToUse()].to(this.getInputText())
      } catch (error) {
        if (error) {
          this.sendFlashMessage('Ett fel uppstod vid chiffreringen: ' + error.message)
        }
      }
    } else {
      result = this.cypher[this.getcypherToUse()].from(this.getInputText())
    }

    this.view.updateElementContent('#displayResult', result)
  }
  isEncode() {
    return this.view.getElementFromDOM('#cypher').checked
  }
  getcypherToUse() {
    return this.view.getElementFromDOM('input[name="typeOfCypher"]:checked').value
  }
  getInputText() {
    return this.view.getElementFromDOM('#textToConvert').value
  }
  sendFlashMessage(message) {
    this.view.displayFlashMessage(message)
  }

  changeActionText(actionType) {
    (actionType === 'cypher') ? this.updateElementsToEncode() : this.updateElementsToDecode()
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

const cypher = Cypher
const view = new View()
const controller = new Controller(cypher, view)
