class CypherHistory {
  constructor() {
    this.history = []
  }
  addCypherToHistory(cypher) {
    this.history.push(cypher)
  }
  getCypherHistory() {
    return this.history
  }
  clearCypherHistory() {
    this.history = []
  }
}