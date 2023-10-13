import { Cypher } from '../model/cypher_module.js'
import { View } from '../view/View.js'

class Controller {
  constructor(model, view) {
    this.cypher = model
    this.view = view
    this.view.getElementFromDOM('#encodeButton').addEventListener('click' , (event) => {
      this.handleButtonClick(event)
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
  getInputText() {
    return this.view.getElementFromDOM('#textToConvert').value
  }
  getcypherToUse() {
    return this.view.getElementFromDOM('input[name="typeOfCypher"]:checked').value
  }
  isEncode() {
    return this.view.getElementFromDOM('#cypher').checked
  }
  sendFlashMessage(message) {
    this.view.displayFlashMessage(message)
  }
}

const cypher = Cypher
const view = new View()
const controller = new Controller(cypher, view)
