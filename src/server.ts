import express, { Request, response, Response } from "express";
import { User } from "./models/user";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Ambiente TypeScript configurado com sucesso!",
  });
});

app.get("/users", (req: Request, res: Response) => {
  const user = new User("Lucas", "lucas@email.com", "123");
  console.log(user.verificarSenha("123")); // true
  console.log(user.verificarSenha("senhaErrada")); // false

  res.json({
    message: `Usuário criado com sucesso! ${user.nome}`,
    timestamp: new Date().toISOString(),
    user: user,
    status: "API funcionando corretamente",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
