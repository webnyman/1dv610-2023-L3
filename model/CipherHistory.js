import { UserCipher } from './UserCipher.js'

class CipherHistory {
  constructor() {
    this.userHistory = []
  }
  addCipherToHistory(userCipher) {
    if (userCipher instanceof UserCipher) {
      this.userHistory.push(userCipher)
    } else {
      throw new Error('Felaktigt format av Chifferhistorik')
    }
  }
  getCipherHistory() {
    return this.userHistory
  }
  clearCipherHistory() {
    this.userHistory = []
  }
}

export { CipherHistory }