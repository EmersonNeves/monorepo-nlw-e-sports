import express, {Request, Response} from 'express'

const app = express()

app.get('/ads', (request:Request, response: Response) => response.json([{ id: 0, name: 'Anúncio 1' }, { id: 1, name: 'Anúncio 2' }, { id: 3, name: 'Anúncio 3' }]))

app.listen(8000)