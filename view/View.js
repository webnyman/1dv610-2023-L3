class View {
  
  constructor() {
    // Get a reference to the displayResult div
    this.displayResultDivInApp = this.getElement('#displayResult')
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

  updateElementContent(selector, content) {
    const element = this.getElementFromDOM(selector);
    if (element) {
      element.textContent = content;
    }
  }
}

export { View }
