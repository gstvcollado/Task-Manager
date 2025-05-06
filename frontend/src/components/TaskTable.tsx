// src/components/TaskTable.tsx
import { useEffect, useState } from "react";
import api from "../api/taskApi";
import type { Task } from "../types/task";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  onEdit: (task: Task) => void;
}

export default function TaskTable({ onEdit }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const deleteTask = async (id: number) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-left">Manage Tasks</h2>
      <table className="w-full table-auto border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{task.title}</td>
              <td className="border px-4 py-2">{task.description}</td>
              <td className="border px-4 py-2 capitalize">
                {task.status.replace("_", " ")}
              </td>
              <td className="border px-4 py-2 space-x-2">
                <button title="Edit" onClick={() => onEdit(task)}>
                  <Pencil size={18} className="text-blue-600 inline" />
                </button>
                <button title="Delete" onClick={() => deleteTask(task.id!)}>
                  <Trash2 size={18} className="text-red-600 inline" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
