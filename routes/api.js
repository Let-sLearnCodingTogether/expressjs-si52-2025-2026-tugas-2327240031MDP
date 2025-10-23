import express from 'express'
import * as aktivitasOlahragaController from '../controller/aktivitasOlahragaController.js'
import * as authController from '../controller/authController.js'
import { protect } from '../middleware/authMiddleware.js'

const api = express.Router()

api.get('/aktivitasOlahraga', aktivitasOlahragaController.listAktivitasOlahraga)
api.post('/aktivitasOlahraga', aktivitasOlahragaController.createAktivitasOlahraga)
api.put('/aktivitasOlahraga/:id', aktivitasOlahragaController.updateAktivitasOlahraga)
api.delete('/aktivitasOlahraga/:id', aktivitasOlahragaController.deleteAktivitasOlahraga)

api.post('/register', authController.register)
api.post('/login', authController.login)
api.get('/profile', protect, authController.viewProfile)

export default api