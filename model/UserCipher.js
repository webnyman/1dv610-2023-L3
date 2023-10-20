class UserCipher {
  #textToTranslate
  #typeOfCipher
  #result

  constructor(textToTranslate, typeOfCipher, result) {
    this.#textToTranslate = textToTranslate;
    this.#typeOfCipher = typeOfCipher;
    this.#result = result;
  }

  getTextToTranslate() {
    return this.#textToTranslate
  }

  getTypeOfCipher() {
    return this.#typeOfCipher
  }

  getResult() {
    return this.#result
  }

}

export { UserCipher }
