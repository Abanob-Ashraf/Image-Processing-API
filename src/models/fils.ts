import fs from 'fs'
import path from 'path'

const imageDirPath: string = path.resolve(__dirname, '..', '..', 'images/original')
const imageOutputDirPath: string = path.resolve('./', 'images/resized')

const makeDirectory = (): void => {
  fs.mkdir(imageOutputDirPath, (err) => {
    return `Error:${err}`
  })
}

const checkDir = (): void => {
  if (fs.existsSync(imageOutputDirPath)) {
    true
  } else {
    return makeDirectory()
  }
}

export { imageDirPath, imageOutputDirPath, makeDirectory, checkDir }
