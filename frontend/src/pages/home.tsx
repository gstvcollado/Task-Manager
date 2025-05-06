// src/pages/Home.tsx
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";
import type { Task } from "../types/task";

export default function Home() {
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (task: Task) => {
    setSelectedTask(task);
  };

  const handleSuccess = () => {
    setSelectedTask(undefined);
    setRefresh(!refresh);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center container">
      <div className="flex justify-center items-center gap-4 mb-6">
        <TaskForm taskToEdit={selectedTask} onSuccess={handleSuccess} />
      </div>

      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <TaskTable key={refresh.toString()} onEdit={handleEdit} />
      </div>
    </div>
  );
}
