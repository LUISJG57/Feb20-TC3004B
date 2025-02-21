'use client'; 

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [counter, setCounter] = useState(10);

  // Verifica si el usuario está autenticado
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user) {
      router.push('/signup'); // Redirige a la página de registro si no hay usuario
    }
  }, [router]);

  // Función para incrementar el contador
  const handleIncrement = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  // Función para decrementar el contador
  const handleDecrement = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter - 1);
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center space-x-4 mt-4">
      <h1 className="text-4xl font-bold text-gray-600">{counter}</h1>
      <form onSubmit={handleIncrement}>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
        >
          Incrementar número
        </button>
      </form>
      <form onSubmit={handleDecrement}>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
        >
          Decrementar número
        </button>
      </form>
    </main>
  );
}