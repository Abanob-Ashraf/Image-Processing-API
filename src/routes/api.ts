import express from 'express'
import getApi from '../controllers/api'

const routes = express.Router()

routes.get('/', getApi)

export default routes
