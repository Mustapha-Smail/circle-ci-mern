import express from 'express'
import { getAlphabet, getAlphabetById, getRandomLetter } from '../controllers/alphabetController.js'
const router = express.Router()

router.route('/').get(getAlphabet)
router.route('/random').get(getRandomLetter)
router.route('/:id').get(getAlphabetById)

export default router