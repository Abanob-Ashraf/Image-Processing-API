import express from 'express'

const getApi = (req: express.Request, res: express.Response) => {
  res.json({
    Message: 'Hello to 1st project IMAGE PROCESSING API',
    ToReviewImage: 'localhost:3000/images?name=<image_name>',
    ToResizeImage: 'localhost:3000/resize?name=<image_name>&height=<height>&width=<width>',
    WidthAndHight: 'Must be Positive Numbers'
  })
}

export default getApi
