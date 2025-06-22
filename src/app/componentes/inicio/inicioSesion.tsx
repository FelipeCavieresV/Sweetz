'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

export default function IniciarSesion() {
  const [mostrarPassword, setMostrarPassword] = useState(false)

  return (
    <div className="d-flex justify-content-center align-items-center px-3 py-5">
      <div
        className="bg-white bg-opacity-75 backdrop-blur p-5 rounded-5 shadow border w-100"
        style={{ maxWidth: '460px' }} // ← más ancho
      >
        <img
          src="/sweetzLogo.png"
          alt="Sweetz logo"
          className="d-block mx-auto mb-4"
          style={{
            height: '80px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 5px 10px rgba(156,39,176,0.5))',
            transition: 'all 0.3s ease-in-out',
          }}
        />

        <p className="text-center text-secondary mb-4 fs-6">
          ¡Atrévete y sé parte de la primera y más grande plataforma de venta de contenido digital en Chile!
        </p>

        <div className="mb-3 position-relative">
          <input
            type="text"
            className="form-control ps-5 py-3"
            placeholder="Nombre de usuario o correo"
          />
          <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">📧</span>
        </div>

        <div className="mb-3 position-relative">
          <input
            type={mostrarPassword ? 'text' : 'password'}
            className="form-control ps-5 pe-5 py-3"
            placeholder="Contraseña"
          />
          <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">🔒</span>
          <AnimatePresence mode="wait">
            <motion.button
              key={mostrarPassword ? 'hide' : 'show'}
              type="button"
              className="btn btn-link btn-sm position-absolute top-50 end-0 translate-middle-y pe-3 text-muted"
              style={{ textDecoration: 'none' }}
              onClick={() => setMostrarPassword(!mostrarPassword)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              {mostrarPassword ? '🙈' : '👁️'}
            </motion.button>
          </AnimatePresence>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4 small">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="mantener" />
            <label className="form-check-label text-secondary" htmlFor="mantener">
              Mantenerme conectado
            </label>
          </div>
          <a
            href="#"
            className="fw-semibold text-decoration-none"
            style={{ color: '#8e24aa' }}
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <button
          className="btn btn-primary w-100 text-white fw-semibold py-3"
          style={{ backgroundColor: '#8e24aa', border: 'none' }}
        >
          Iniciar sesión
        </button>

        <p className="text-center text-secondary small mt-4">
          ¿No tienes cuenta?{' '}
          <a
            href="#"
            className="fw-bold text-decoration-none"
            style={{ color: '#8e24aa' }}
          >
            ¡Regístrate ahora!
          </a>
        </p>
      </div>
    </div>
  )
}
