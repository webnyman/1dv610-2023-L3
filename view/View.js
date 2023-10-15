class View {
  
  constructor() {
  }

  createElementInDOM(tag, className) {
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
    const flashMessage = this.createElementInDOM('p', 'flashMessage')
    flashMessage.textContent = message
    this.getElementFromDOM('#flashMessage').appendChild(flashMessage)
    setTimeout(() => {
      flashMessage.remove()
    }, 3000)
  }
}

export { View }
