import TarefaModel from "../models/Tarefa.js";

let listaTarefas = []; 


export const criarNovaTarefa = (req, res) => {
  const { titulo, concluida } = req.body;
  if (!titulo) {
    return res.status(400).json({ erro: "Campo 'titulo' é obrigatório!" });
  }

  const tarefa = new TarefaModel(titulo, concluida);
  listaTarefas.push(tarefa);
  res.status(201).json({ mensagem: "Tarefa adicionada com sucesso!", tarefa });
};


export const listarTodasTarefas = (req, res) => {
  res.json(listaTarefas);
};


export const pegarTarefaPorId = (req, res) => {
  const { taskId } = req.params;
  const tarefa = listaTarefas.find(t => t.id === taskId);
  if (!tarefa) return res.status(404).json({ erro: "Tarefa não encontrada" });

  res.json(tarefa);
};


export const atualizarTarefaPorId = (req, res) => {
  const { taskId } = req.params;
  const tarefa = listaTarefas.find(t => t.id === taskId);
  if (!tarefa) return res.status(404).json({ erro: "Tarefa não encontrada" });

  const { titulo, concluida } = req.body;
  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json({ mensagem: "Tarefa atualizada!", tarefa });
};


export const deletarTarefaPorId = (req, res) => {
  const { taskId } = req.params;
  const index = listaTarefas.findIndex(t => t.id === taskId);
  if (index === -1) return res.status(404).json({ erro: "Tarefa não encontrada" });

  listaTarefas.splice(index, 1);
  res.json({ mensagem: "Tarefa removida com sucesso!" });
};
