class CipherHistory {
  constructor() {
    this.history = []
  }
  addCipherToHistory(Cipher) {
    this.history.push(Cipher)
  }
  getCipherHistory() {
    return this.history
  }
  clearCipherHistory() {
    this.history = []
  }
}