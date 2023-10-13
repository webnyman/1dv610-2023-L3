class StringFunctions {
  countNumberOfCharacters (text) {
    return text.length
  }

  countNumberOfWords (text) {
    return text.split(' ').length
  }

  countNumberOfVowels (text) {
    const numberOfVowels = text.match(/[aoueiyåäö]/gi)
    if (numberOfVowels === null) {
      return 0
    }
    return numberOfVowels.length
  }

  countNumberOfConsonants (text) {
    const numberOfConsonants = text.match(/[bcdfghjklmnpqrstvwxz]/gi)
    if (numberOfConsonants === null) {
      return 0
    }
    return numberOfConsonants.length
  }

  isStringEmpty (text) {
    if (text.length === 0) {
      return true
    } else {
      return false
    }
  }

  isString (text) {
    if (typeof text === 'string') {
      return true
    } else {
      return false
    }
  }

  reverseString (text) {
    return (text).split('').reverse().join('')
  }
}

export { StringFunctions }
