import { Router } from "express";
import {
  criarNovaTarefa,
  listarTodasTarefas,
  pegarTarefaPorId,
  atualizarTarefaPorId,
  deletarTarefaPorId
} from "../controllers/tarefasController.js";

const tarefasRouter = Router();

tarefasRouter.post("/", criarNovaTarefa);
tarefasRouter.get("/", listarTodasTarefas);
tarefasRouter.get("/:taskId", pegarTarefaPorId);
tarefasRouter.put("/:taskId", atualizarTarefaPorId);
tarefasRouter.delete("/:taskId", deletarTarefaPorId);

export default tarefasRouter;
