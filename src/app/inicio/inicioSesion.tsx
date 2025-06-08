'use client'

import { useState } from 'react'
import { Dancing_Script } from 'next/font/google' //fuente del titulo principal 

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] }) // ✅ FUERA del componente

export default function InicioSesion() {
  const [mostrarPassword, setMostrarPassword] = useState(false)

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/fondo-login.jpg')" }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className={`${dancing.className} text-5xl text-rose-500 mb-4 text-center tracking-wide`}></h1>
        Sweetz
        <p className="text-sm text-gray-500 mb-6 text-center">
          ¡Atrévete y sé parte de la primera y más grande plataforma de venta de contenido digital en Chile!
        </p>

        <input
          type="text"
          placeholder="Nombre de usuario o correo electrónico"
          className="w-full p-3 mb-4 border rounded-lg outline-none"
        />

        <div className="relative mb-4">
          <input
            type={mostrarPassword ? 'text' : 'password'}
            placeholder="Contraseña"
            className="w-full p-3 pr-10 border rounded-lg outline-none"
          />
          <button
            type="button"
            onClick={() => setMostrarPassword(!mostrarPassword)}
            className="absolute right-3 top-3 text-gray-500"
          >
            👁️
          </button>
        </div>

        <div className="text-right text-sm text-blue-500 mb-3">
          <a href="#">¿Se te olvidó tu contraseña?</a>
        </div>

        <div className="flex items-center mb-4 text-sm">
          <input type="checkbox" id="mantener" className="mr-2" />
          <label htmlFor="mantener" className="text-gray-700">Mantenerme conectado</label>
        </div>

        <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 rounded-lg">
          Iniciar sesión
        </button>

        <p className="mt-4 text-center text-sm">
          <a href="#" className="text-cyan-500 font-bold">¡Regístrate ahora!</a>
        </p>
      </div>
    </div>
  )
}
