import {Router} from 'express'
import ProductControler from '../controlers/productControlers'

const router = Router()
router.get('/', ProductControler.getAll)

export default router