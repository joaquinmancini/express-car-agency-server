import cors from 'cors'
import express from 'express'
import { ApiRoutes } from './router/apiRoutes'

const app = express()
//Permitir cors para todos los origenes
//app.use(cors());

app.use(cors({ origin: 'http://localhost:5173' }))
const port = process.env.PORT || 8000

//La aplicacion con Express se le pasa como parametro a ApiRoutes
ApiRoutes(app)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
export default app
