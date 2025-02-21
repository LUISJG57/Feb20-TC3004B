"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  // Leer el nombre del usuario desde localStorage al cargar el componente
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-gray-800" >
                LuisAPP |
            </Link>
            {/* Mostrar el nombre del usuario si está registrado */}
            {userName && (
              <div className="text-blue-800 px-3 py-2 text-m font-semibold">
                {userName}
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/pag1" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Pág 1 
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;