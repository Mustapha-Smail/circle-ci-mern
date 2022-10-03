import express from 'express'
import { getHome } from '../controllers/homeController.js'
const router = express.Router()

router.route('/').get(getHome)

export default router