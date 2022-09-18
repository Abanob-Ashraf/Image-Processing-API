import { Router } from 'express'
import getApi from '../controllers/api'
import { getImages, resize } from '../controllers/images'

const routes = Router()

routes.get('/', getApi)

routes.get('/images', getImages)

routes.get('/resize', resize)

export default routes
