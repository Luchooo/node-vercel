import express from 'express'
import morgan from 'morgan'
import { print } from './utils/logger'

const app = express()

app.use(morgan('dev'))

app.get('/', (_req, res) => {
  res.send('Hello Luis')
})

app.get('/api/emojis', (_req, res) => {
  res.json({ happy: '😇', check: '✔️' })
})

app.use(function (_req, res) {
  res.status(404).send('Sorry cant find that!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  print.info(`Server running on: http://localhost:${PORT}`)
})

export default app
