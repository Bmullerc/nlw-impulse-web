import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express()

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informacoes
// POST = Cadastrar informacoes
// PUT = Atualizar informacoes de uma entidade
// PATCH = Atualizar uma informacao unica de uma entidade
// DELETE = Deletar uma informacao

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running :^)')
});