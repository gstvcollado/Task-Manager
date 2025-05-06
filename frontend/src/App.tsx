// src/App.tsx
import Home from "./pages/home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 tituloPrincipal">
        Task Manager
      </h1>
      <Home />
    </div>
  );
}
