import { UserCipher } from '../model/UserCipher.js'

class View {
  #FLASH_MESSAGE = '#flashMessage'
  #HISTORY_TABLE = '#historyTable'
  #TABLE_HEADERS = ['Text att chiffrera', 'Typ av chiffer', 'Resultat']

  constructor() {
  }

  createElementInDOM(tag, className = '') {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  getElementFromDOM(selector) {
    const element = document.querySelector(selector)

    return element
  }

  getElementsFromDOM(selector) {
    const elements = document.querySelectorAll(selector)

    return elements
  }

  updateElementContent(selector, content) {
    const element = this.getElementFromDOM(selector);
    if (element) {
      element.textContent = content;
    }
  }

  displayFlashMessage(message) {
    const flashMessage = this.createElementInDOM('p')
    flashMessage.textContent = message
    this.getElementFromDOM(this.#FLASH_MESSAGE).appendChild(flashMessage)
    setTimeout(() => {
      flashMessage.remove()
    }, 3000)
  }

  renderHistoryTable(cipherHistory) {
    const historyTable = this.createElementInDOM('table')
    const tableHeader = historyTable.createTHead()
    const tableRow = tableHeader.insertRow()

    // Create table headers
    this.#TABLE_HEADERS.forEach(header => {
      const tableHeader = document.createElement('th')
      tableHeader.textContent = header
      tableRow.appendChild(tableHeader)
    })

    // Create table body
    const tableBody = historyTable.createTBody()
    cipherHistory.forEach(userCipher => {
      const tableRow = tableBody.insertRow()
      const tableData = [userCipher.textToTranslate, userCipher.typeOfCipher, userCipher.result]
      tableData.forEach(data => {
        const tableCell = tableRow.insertCell()
        tableCell.textContent = data
      })
    })

    // Render table
    this.getElementFromDOM(this.#HISTORY_TABLE).appendChild(historyTable)
  }

  clearHistoryTable() {
    this.getElementFromDOM(this.#HISTORY_TABLE).innerHTML = ''
  }
}

export { View }
