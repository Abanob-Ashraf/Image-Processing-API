import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { checkDir, imageDirPath, imageOutputDirPath } from './fils'

const checkImage = (image: string, height: number, width: number): boolean => {
  const imageResized: string = path.join(imageOutputDirPath, `${image}_${height}_${width}.jpg`)

  return fs.existsSync(imageResized)
}

const imageResizing = async (image: string, height: number, width: number): Promise<void> => {
  const original: string = path.join(imageDirPath, `${image}.jpg`)
  const resized: string = path.join(imageOutputDirPath, `${image}_${height}_${width}.jpg`)

  await sharp(original).resize({ height: height, width: width }).toFile(resized)
}

const imagesProcessing = async (image: string, height: number, width: number): Promise<boolean> => {
  try {
    checkDir()

    let status = false

    if (checkImage(image, height, width)) {
      console.log('aleady exist')
      status = true
    } else {
      await imageResizing(image, height, width)
      console.log('correct resized')
      status = true
    }
    return status
  } catch (err) {
    console.log(`Error:${err}`)
    return false
  }
}

export { checkImage, imageResizing, imagesProcessing }
