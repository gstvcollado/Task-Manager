// src/types/task.ts
export type TaskStatus = "pending" | "in_progress" | "done";

export interface Task {
  id?: number;
  title: string;
  description?: string;
  status: TaskStatus;
  created_at?: string;
  updated_at?: string;
}
