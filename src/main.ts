import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

import routes from './routes/api'

dotenv.config()

const PORT = process.env.PORT || 3000

// create an instance server
const app = express()

// HTTP request logger middleware
app.use(morgan('short'))

// // add routing for / path
app.use(routes);

// app.use('/images', express.static('../images/full'));

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at http://localhost:prot:${PORT}`)
})

export default app
