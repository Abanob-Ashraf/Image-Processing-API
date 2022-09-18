import { checkImage, imagesProcessing } from '../models/images'
import fs from 'fs'
import path from 'path'

describe('Test chek image if resized before', () => {
  it('check image', async () => {
    await expect(checkImage('fjord', 100, 100)).toBeTruthy()
  })
})

describe('Test chek image if not resized before', () => {
  it('check image', async () => {
    await expect(checkImage('icelandwaterfall', 100, 100)).toBeFalsy()
  })
})

describe('Test the image is resizing?', () => {
  it('imageResizing', async () => {
    await imagesProcessing('fjord', 350, 350)
    expect(checkImage('fjord', 350, 350)).toBeTruthy()
    fs.unlink(path.resolve('./', 'images/resized/fjord_350_350.jpg'), (err) => {
      return err
    })
  })
})
