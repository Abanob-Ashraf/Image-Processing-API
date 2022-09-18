import { Request, Response } from 'express'
import images from '../data/images'
import fs, { existsSync } from 'fs'
import { imageDirPath, imageOutputDirPath } from '../models/fils'
import { imagesProcessing } from '../models/images'
import { join } from 'path'

const getImages = (req: Request, res: Response) => {
  const name = req.query.name as string
  const imgLocation = `${imageDirPath}/${name}.jpg`
  const image = images.includes(name)

  if (name === undefined) {
    return res.status(400).send('Bad request, Please enter a valid URL containg the imagename')
  }
  if (image === false) {
    return res.status(400).send("Enter the image name correct or this image doesn't exist")
  }
  if (existsSync(imgLocation) === false) {
    return res.status(400).send('image not found')
  }
  res.sendFile(imgLocation)
}

const resize = async (req: Request, res: Response) => {
  const name: string = req.query.name as string
  const height: number = parseInt(req.query.height as string)
  const width: number = parseInt(req.query.width as string)
  const imgLocation = `${imageDirPath}/${name}.jpg`
  const image = images.includes(name)

  if (name === undefined) {
    return res.status(400).send('Bad request, Please enter a valid URL containg the imagename')
  }
  if (image === false) {
    return res.status(400).send("Enter the image name correct or this image doesn't exist")
  }
  if (existsSync(imgLocation) === false) {
    return res.status(400).send('image not found')
  }
  if (!height || !width) {
    return res
      .status(400)
      .send('Please enter a valid URL containg the imagename, height and the width parameters.')
  }

  if (name && height && width) {
    if (await imagesProcessing(name, height, width)) {
      const imageResized: string = join(imageOutputDirPath, `${name}_${height}_${width}.jpg`)
      const imageContent: Buffer = fs.readFileSync(imageResized)
      res.write(imageContent)
      res.end()
    }
  }
}

export { getImages, resize }
