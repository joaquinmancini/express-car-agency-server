import express from 'express'
import { ApiRoutes } from './router/apiRoutes'

const app = express()
const port = process.env.PORT || 8000

ApiRoutes(app)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
export default app
