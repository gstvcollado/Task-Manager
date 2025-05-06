// src/api/taskApi.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // ajusta si usas diferente puerto
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
