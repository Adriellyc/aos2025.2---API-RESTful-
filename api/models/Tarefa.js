import { v4 as uuidv4 } from "uuid";

class TarefaModel {
  constructor(titulo, concluida = false) {
    this.id = uuidv4();
    this.titulo = titulo;
    this.concluida = concluida;
  }
}

export default TarefaModel;