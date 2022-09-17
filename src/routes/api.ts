import express, {Router} from 'express'
import getApi from '../controllers/api'
import getImages from '../controllers/images'

const routes = Router()

routes.get('/', getApi)

routes.get('/images', getImages)

export default routes
