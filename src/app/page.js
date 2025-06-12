'use client'
import { Dancing_Script } from 'next/font/google'
import { useState } from 'react'
import IniciarSesion from './componentes/inicio/inicioSesion'


const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

export default function HomePage() {
  const [mostrarPassword, setMostrarPassword] = useState(false)

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/images/bg-swettz.jpg')" }}
    >
      {/* LOGIN */}
      <IniciarSesion />

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
