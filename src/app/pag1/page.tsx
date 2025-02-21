'use client'; 
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

{/*counter func */}
export default function page1() {

const router = useRouter();

// Verifica si el usuario está autenticado
useEffect(() => {
const user = JSON.parse(localStorage.getItem('user') || 'null');
if (!user) {
    router.push('/signup'); // Redirige a la página de registro si no hay usuario
}
}, [router]);

const [bgColor, setBgColor] = useState("black");
  return (
    <main className="flex flex-col min-h-screen items-center justify-center ">
        <div className={`w-1/2 p-4 rounded-lg shadow-lg h-64 bg-${bgColor}`}> </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <button onClick={() => setBgColor("green-500")} className="bg-green-500 text-white p-2 rounded">Green</button>
            <button onClick={() => setBgColor("red-500")} className="bg-red-500 text-white p-2 rounded">Red</button>
            <button onClick={() => setBgColor("blue-500")} className="bg-blue-500 text-white p-2 rounded">Blue</button>
            <button onClick={() => setBgColor("orange-500")} className="bg-orange-500 text-white p-2 rounded">Orange</button>
        </div>
    </main>
  );
}