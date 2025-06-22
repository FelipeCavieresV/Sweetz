'use client'

import { useState } from 'react'
import { Dancing_Script } from 'next/font/google'
import IniciarSesion from '../../componentes/inicio/inicioSesion'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

export default function HomePage() {
  const [mostrarRegistro, setMostrarRegistro] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [tipo, setTipo] = useState('suscriptor')
  const [error, setError] = useState('')

  const handleRegistro = async (e) => {
    e.preventDefault()
    try {
      setMostrarRegistro(false)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div
      className="min-vh-100 d-flex flex-column justify-between"
      style={{
        backgroundImage: "url('/images/bg-swettz.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {mostrarRegistro ? (
        <div className="d-flex justify-content-center align-items-center px-3 py-5">
          <div
            className="bg-white bg-opacity-75 backdrop-blur p-5 rounded-5 shadow border w-100"
            style={{ maxWidth: '460px' }}
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

            <h5 className="text-center mb-3 fw-bold">Crear cuenta</h5>

            <form onSubmit={handleRegistro}>
              <div className="mb-3">
                <label className="form-label">Nombre de usuario</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              {error && <p className="text-danger small">{error}</p>}
              <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#8e24aa' }}>
                Registrarme
              </button>
            </form>

            <p className="text-center text-secondary small mt-4">
              ¿Ya tienes una cuenta?{' '}
              <button
                className="fw-bold text-decoration-none border-0 bg-transparent"
                style={{ color: '#8e24aa' }}
                onClick={() => setMostrarRegistro(false)}
              >
                Inicia sesión
              </button>
            </p>
          </div>
        </div>
      ) : (
         <IniciarSesion setMostrarRegistro={setMostrarRegistro} />
      )}

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