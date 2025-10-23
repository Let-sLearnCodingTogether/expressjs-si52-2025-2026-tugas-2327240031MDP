import express from 'express'
import * as aktivitasOlahragaController from '../controller/aktivitasOlahragaController.js'
import * as authController from '../controller/authController.js'

const api = express.Router()

api.get('/aktivitasOlahraga', aktivitasOlahragaController.listAktivitasOlahraga)
api.post('/aktivitasOlahraga', aktivitasOlahragaController.createAktivitasOlahraga)
api.put('/aktivitasOlahraga/:id', aktivitasOlahragaController.updateAktivitasOlahraga)
api.delete('/aktivitasOlahraga/:id', aktivitasOlahragaController.deleteAktivitasOlahraga)

api.post('/register', authController.register)
api.post('/login', authController.login)

export default api