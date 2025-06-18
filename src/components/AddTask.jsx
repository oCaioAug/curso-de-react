import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
        <Input
          type="text"
          name="taskTitle"
          id="taskTitle"
          placeholder="Digite o título da tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          type="text"
          name="taskDescription"
          id="taskDescription"
          placeholder="Digite a descrição da tarefa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button
          onClick={() => {
            if (!title.trim() || !description.trim()) return alert("Preencha todos os campos!");
            // Chama a função de callback para adicionar a tarefa

            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }}
          type="button"
          className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium w-full"
        >
          Adicionar
        </button>
      </div>
    </>
  );
}

export default AddTask;
