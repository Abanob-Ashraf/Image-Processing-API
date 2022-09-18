import express from 'express'

const getApi = (req: express.Request, res: express.Response) => {
  res.json({
    Message: 'Hello to 1st project IMAGE PROCESSING API',
    Scripts: 'This is the scriptes to use for program',
    Install: 'npm install',
    Build: 'npm run build',
    Lint: 'npm run lint',
    prettier: 'npm run prettier',
    RunUnitTests: 'npm run test',
    StartServer: 'npm run start',
    StartAsDeveloper: 'npm run dev'
  })
}

export default getApi
