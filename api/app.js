import express from "express";
import tarefasRouter from "./routes/tarefasRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

// ROTA PADRÃO (opcional, para testes)
app.get("/", (req, res) => {
  res.send("API de Tarefas funcionando! ✅");
});

// Usa o router para todas as rotas /api/tarefas (melhor padronizar com /api)
app.use("/api/tarefas", tarefasRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app; // Para deploy na Vercel
