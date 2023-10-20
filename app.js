import { Controller } from './controller/Controller.js'
import { Cipher } from './model/cipher_module.js'
import { View } from './view/View.js'
import { CipherHistory } from './model/CipherHistory.js'


const app = new Controller(Cipher, new View(), new CipherHistory())

export { app }