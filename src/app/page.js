'use client'
import { motion, AnimatePresence } from 'framer-motion' //liberia de animacion
import { useState } from 'react'
import { Dancing_Script } from 'next/font/google' // fuente para el título
import { Lobster } from 'next/font/google' // fuente opcional para frases si la usas después

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

export default function HomePage() {
  const [mostrarPassword, setMostrarPassword] = useState(false)

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/images/bg-swettz.jpg')" }} // Usa aquí tu imagen
    >
      {/* LOGIN */}
      <div className="flex items-center justify-center px-4 py-20">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl p-10 rounded-3xl max-w-md w-full border border-gray-200">
          <h1
            className={`
              ${dancing.className}
              text-5xl sm:text-6xl md:text-7xl
              text-[#8e24aa]
              mb-4 text-center tracking-wide
              drop-shadow-[0_5px_10px_rgba(156,39,176,0.5)]
              hover:drop-shadow-[0_5px_20px_rgba(156,39,176,0.8)]
              transition-all duration-300 ease-in-out
            `}
          >
            Sweetz
          </h1>

          <p className="text-base text-gray-600 mb-8 text-center">
            ¡Atrévete y sé parte de la primera y más grande plataforma de venta de contenido digital en Chile!
          </p>

          {/* Usuario */}
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="Nombre de usuario o correo"
              className="w-full px-4 py-3 pl-10 text-black border border-gray-500 rounded-xl shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-[#8e24aa]
                         hover:border-[#8e24aa] transition-all duration-300"
            />
            <span className="absolute left-3 top-3.5 text-gray-400">📧</span>
          </div>

          {/* Contraseña */}
          <div className="relative mb-5">
            <input
              type={mostrarPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              className="w-full px-4 py-3 pl-10 pr-10 text-black border border-gray-500 rounded-xl shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-[#8e24aa]
                         hover:border-[#8e24aa] transition-all duration-300"
            />
            <span className="absolute left-3 top-3.5 text-gray-400">🔒</span>
            <AnimatePresence mode="wait">
              <motion.button
                key={mostrarPassword ? 'hide' : 'show'}
                type="button"
                onClick={() => setMostrarPassword(!mostrarPassword)}
                className="absolute right-3 top-3.5 text-gray-500 hover:text-[#8e24aa] transition-colors"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                {mostrarPassword ? '🙈' : '👁️'}
              </motion.button>
            </AnimatePresence>
          </div>

          {/* Enlace y mantener sesión */}
          <div className="flex items-center justify-between text-sm mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="mantener" className="mr-2" />
              <label htmlFor="mantener" className="text-gray-700">Mantenerme conectado</label>
            </div>
            <a
              href="#"
              className="text-[#8e24aa] hover:text-[#ab47bc] font-semibold hover:underline transition-colors duration-200"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón */}
          <button className="w-full bg-[#8e24aa] hover:bg-[#9c27b0] transition-colors text-white font-semibold py-3 rounded-xl shadow-md cursor-pointer">
            Iniciar sesión
          </button>

          {/* Registro */}
          <p className="mt-6 text-gray-600 text-center text-sm">
            ¿No tienes cuenta?{' '}
            <a
              href="#"
              className="text-[#8e24aa] font-bold hover:text-[#ab47bc] hover:underline transition-colors duration-200"
            >
              ¡Regístrate ahora!
            </a>
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white bg-opacity-80 py-3 text-center text-xs text-gray-500">
        <div className="flex flex-wrap justify-center gap-4 px-4">
          <a href="#">Términos de uso</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Política de Cookies</a>
          <a href="#">Preguntas de Creador</a>
          <a href="#">Preguntas de Usuario</a>
          <a href="#">Reembolsos</a>
          <a href="#">Contáctenos</a>
          <a href="#">Blog</a>
          <a href="#">🌐 Español</a>
        </div>
        <p className="mt-1">© 2025 Sweetz</p>
      </footer>
    </div>
  )
}
