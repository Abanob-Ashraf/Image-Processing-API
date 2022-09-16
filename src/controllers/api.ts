import express from 'express'

const getApi = (req: express.Request, res: express.Response, next: Function) => {
  res.send('hello aaa')
}

export default getApi
