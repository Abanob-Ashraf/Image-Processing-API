import supertest from 'supertest'
import app from '../main'

// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})

describe('Test endpoint response', () => {
  it('test images endpoint', async () => {
    const response = await request.get('/images')
    expect(response.status).toBe(400)
  })
})

describe('Test endpoint response', () => {
  it('test resize endpoint', async () => {
    const response = await request.get('/resize')
    expect(response.status).toBe(400)
  })
})
