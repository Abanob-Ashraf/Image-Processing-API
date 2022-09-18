import express from 'express'
import dotenv from 'dotenv'

import routes from './routes/api'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(routes)

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at http://localhost:prot:${PORT}`)
})

export default app
