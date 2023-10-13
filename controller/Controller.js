import { Cypher } from "../model/cypher_module.js";
import { View } from "../view/View.js";

class Controller {
  constructor() {
    this.cypher = new Cypher();
    this.view = new View();
    this.view.getElementFromDOM("#encodeButton").addEventListener("click", this.handleButtonClick.bind(this));
  }

  handleButtonClick(event) {
    event.preventDefault();
    let result = "";

    if (this.#isEncode()) {
      result = this.cypher[this.#getcypherToUse()].to(this.#getInputText());
    } else {
      result = this.cypher[this.#getcypherToUse()].from(this.#getInputText());
    }

    this.view.updateElementContent("#displayResult", result);
  }
  #getInputText() {
    return this.view.getElementFromDOM("#inputText").value;
  }
  #getcypherToUse() {
    return this.view.getElementFromDOM("#cypherToUse").value;
  }
  #isEncode() {
    return this.view.getElementFromDOM("#encode").checked;
  }
}

export { Controller };