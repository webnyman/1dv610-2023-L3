import { Fikonsprak } from './cypher/Fikonsprak.js'
import { Rot13 } from './cypher/Rot13.js'
import { Rovarsprak } from './cypher/Rovarsprak.js'

const rovarSprakLibrary = new Rovarsprak()
const rot13Library = new Rot13()
const fikonSprakLibrary = new Fikonsprak()

const Cipher = {
  fikonsprak: {
    to: (text) => fikonSprakLibrary.translateToFikonSprak(text),
    from: (text) => fikonSprakLibrary.translateFromFikonSprak(text)
  },
  fikonsprakRot13: {
    to: (text) => rot13Library.encodeToROT13(fikonSprakLibrary.translateToFikonSprak(text)),
    from: (text) => fikonSprakLibrary.translateFromFikonSprak(rot13Library.decodeFromROT13(text))
  },
  rot13: {
    to: (text) => rot13Library.encodeToROT13(text),
    from: (text) => rot13Library.decodeFromROT13(text)
  },
  rovarsprak: {
    to: (text) => rovarSprakLibrary.translateToRovarSprak(text),
    from: (text) => rovarSprakLibrary.translateFromRovarsprak(text)
  },
  rovarsprakRot13: {
    to: (text) => rot13Library.encodeToROT13(rovarSprakLibrary.translateToRovarSprak(text)),
    from: (text) => rovarSprakLibrary.translateFromRovarsprak(rot13Library.decodeFromROT13(text))
  }
}

export { Cipher }
