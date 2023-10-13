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
    const inputText = this.view.getElementFromDOM("#inputText").value;
    const cypherToUse = this.view.getElementFromDOM("#cypherToUse").value;
    const encodeOrDecode = this.view.getElementFromDOM("#encodeOrDecode").value;
    let result = "";

    if (encodeOrDecode === "encode") {
      result = this.cypher[cypherToUse].to(inputText);
    } else {
      result = this.cypher[cypherToUse].from(inputText);
    }

    this.view.updateElementContent("#displayResult", result);
  }
}

export { Controller };