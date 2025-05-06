// src/components/TaskForm.tsx
import { useState, useEffect } from "react";
import api from "../api/taskApi";
import type { Task } from "../types/task";

interface Props {
  taskToEdit?: Task;
  onSuccess: () => void;
}

const initialTask: Task = {
  title: "",
  description: "",
  status: "pending",
};

export default function TaskForm({ taskToEdit, onSuccess }: Props) {
  const [task, setTask] = useState<Task>(initialTask);

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task.id) {
      await api.put(`/tasks/${task.id}`, task);
    } else {
      await api.post("/tasks", task);
    }
    setTask(initialTask);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold tituloSecundario">
        {task.id ? "Editar tarea" : "Crear nueva tarea"}
      </h2>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Título"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Descripción"
        className="w-full p-2 border rounded"
      />
      <select
        name="status"
        value={task.status}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="pending">Pending</option>
        <option value="in_progress">In progress</option>
        <option value="done">Done</option>
      </select>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {task.id ? "Actualizar" : "Crear"}
      </button>
      <a href="../pages/home.tsx">Cancelar</a>
    </form>
  );
}
