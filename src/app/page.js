'use client'
import { Dancing_Script } from 'next/font/google'
import { useState } from 'react'
import IniciarSesion from './componentes/inicio/inicioSesion'


const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

export default function HomePage() {
  return (
    <div
      className="min-vh-100 d-flex flex-column justify-between"
      style={{
        backgroundImage: "url('/images/bg-swettz.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <IniciarSesion />

      <footer className="bg-white bg-opacity-75 py-3 text-center small text-secondary mt-auto">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-2">
            <a href="#" className="text-secondary text-decoration-none">Términos de uso</a>
            <a href="#" className="text-secondary text-decoration-none">Política de Privacidad</a>
            <a href="#" className="text-secondary text-decoration-none">Política de Cookies</a>
            <a href="#" className="text-secondary text-decoration-none">Preguntas de Creador</a>
            <a href="#" className="text-secondary text-decoration-none">Preguntas de Usuario</a>
            <a href="#" className="text-secondary text-decoration-none">Reembolsos</a>
            <a href="#" className="text-secondary text-decoration-none">Contáctenos</a>
            <a href="#" className="text-secondary text-decoration-none">Blog</a>
            <a href="#" className="text-secondary text-decoration-none">🌐 Español</a>
          </div>
          <p className="mb-0">© 2025 Sweetz</p>
        </div>
      </footer>
    </div>
  )
}