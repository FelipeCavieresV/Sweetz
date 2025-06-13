'use client'

import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

export default function FooterPerfil() {
  return (
    <footer className="border-t border-gray-200 py-10 px-4 text-sm text-gray-600 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Columna 1: Marca y redes */}
        <div className="text-left"> {/* Aquí cambia de 'text-center' a 'text-left' */}
          <h4
            className={`${dancing.className} text-4xl sm:text-5xl text-[#8e24aa] mb-4 tracking-wide drop-shadow-[0_5px_10px_rgba(156,39,176,0.5)] hover:drop-shadow-[0_5px_20px_rgba(156,39,176,0.8)] transition-all duration-300 ease-in-out`}
          >
            Sweetz
          </h4>
          <p className="mb-3 text-gray-500">Síguenos en nuestras redes sociales</p>
          <div className="flex space-x-4 text-gray-500 text-lg">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>

        {/* Columna 2: Acerca de */}
        <div>
          <h3 className="font-semibold text-gray-500 uppercase mb-2">Acerca de</h3>
          <ul className="space-y-1 text-gray-500">
            <li><a href="#">Términos de uso</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Política de Cookies</a></li>
            <li><a href="#">Preguntas de Creador</a></li>
            <li><a href="#">Preguntas de Usuario</a></li>
            <li><a href="#">Reembolsos</a></li>
            <li><a href="#">Contáctenos</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Columna 3: Categorías */}
        <div>
          <h3 className="font-semibold text-gray-500 uppercase mb-2">Categorías</h3>
          <ul className="space-y-1 text-gray-500">
            <li><a href="#">Explorar →</a></li>
          </ul>
        </div>

        {/* Columna 4: Enlaces */}
        <div>
          <h3 className="font-semibold text-gray-500 uppercase mb-2">Enlaces</h3>
          <ul className="space-y-1 text-gray-500">
            <li><a href="#">Mi perfil</a></li>
            <li><a href="#">Editar perfil</a></li>
            <li><a href="#">Mis suscripciones</a></li>
            <li><a href="#">Cerrar sesión</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">© 2025 Sweetz</div>
    </footer>
  )
}
