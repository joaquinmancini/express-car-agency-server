import express, { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import util from 'util'

export const ApiRoutes = (app: express.Application) => {
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!')
  })

  app.get('/cars', async (req: Request, res: Response) => {
    try {
      const data = await getJsonCar(req, res)
      res.json({ cars: data }).status(200)
    } catch (err) {
      console.error('Error handling /cars route:', err)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })
}

const getJsonCar = async (req: Request, res: Response) => {
  try {
    const filePath = path.join(__dirname, '../autos.json')
    const data = await readFileAsync(filePath, 'utf8')
    const jsonData = JSON.parse(data)
    return jsonData
  } catch (err) {
    console.error('Error reading or processing JSON file:', err)
    throw err // Re-throw the error to be caught in the calling function
  }
}

// Helper function to promisify fs.readFile
const readFileAsync = util.promisify(fs.readFile)
