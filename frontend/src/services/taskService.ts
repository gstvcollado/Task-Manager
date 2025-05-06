import axios from "axios";
import type { Task } from "../api/taskApi";

const API_URL = "http://127.0.0.1:8000/api/v1/tasks/"; // Asegúrate de que esta sea la URL correcta de tu API

// Configuramos Axios
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Obtener todas las tareas desde el backend
export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await axiosInstance.get("/"); // Hacemos una solicitud GET
    return response.data; // Retornamos las tareas desde la respuesta
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    throw error;
  }
};

// Crear una nueva tarea
export const createTask = async (task: Task): Promise<Task> => {
  try {
    const response = await axiosInstance.post("/", task); // Hacemos una solicitud POST para crear
    return response.data; // Retornamos la tarea creada
  } catch (error) {
    console.error("Error al crear tarea:", error);
    throw error;
  }
};

// Actualizar una tarea existente
export const updateTask = async (task: Task): Promise<Task> => {
  try {
    const response = await axiosInstance.put(`/${task.id}`, task); // Hacemos una solicitud PUT para actualizar
    return response.data; // Retornamos la tarea actualizada
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    throw error;
  }
};

// Eliminar una tarea
export const deleteTask = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(`/${id}`); // Hacemos una solicitud DELETE
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    throw error;
  }
};
