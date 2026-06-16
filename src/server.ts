import express, { Request, Response } from 'express';
import { User } from './models/user';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
     message: "Ambiente TypeScript configurado com sucesso!",
    });
});

const user = new User('Lucas', 'lucas@email.com', '123')
user.verificarSenha('123') // true
user.verificarSenha('abc') // false

console.log(user);

app.get('/users', (req: Request, res: Response) => {
  res.json({
     user: user 
    });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
