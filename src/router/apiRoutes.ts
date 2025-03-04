import express, { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import util from 'util'
import getAutos from '../mocks/autos'

export const ApiRoutes = (app: express.Application) => {
  const prefix = '/api/v1'

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!')
  })

  app.get(prefix + '/cars', async (req: Request, res: Response) => {
    try {
      //Caso prar tratar un body enviado desde el front
      // const requestData = req.body;
      // if (!requestData) {
      //   res.status(404).json({ error: "Se debe enviar un body valido" }).send();
      // }
      const data = await getJsonCar(req, res)
      res.json({ cars: data }).status(200)
    } catch (err) {
      console.error('Error handling /cars route:', err)
      res.status(500).json({ error: 'Internal Server Error' }).send()
    }
  })

  app.get(prefix + '/carsMock', async (req: Request, res: Response) => {
    try {
      const data = await getAutos()
      console.log('DataMock', data)
      res.json({ cars: data }).status(200)
    } catch (err) {
      console.error('Error handling /cars route:', err)
      res.status(500).json({ error: 'Internal Server Error' }).send()
    }
  })
}

//Metodo Interno
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
