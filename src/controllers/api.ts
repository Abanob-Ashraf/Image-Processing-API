import express, {Request, Response} from 'express'

const getApi = ((req: Request, res: Response) => {
  res.send('hi')
})

export default getApi
