import express from "express";
import tarefasRouter from "./routes/tarefasRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/tarefas", tarefasRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

export default app; // Necessário para deploy na Vercel
