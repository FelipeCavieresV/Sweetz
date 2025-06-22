'use client'

import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

export default function FooterPerfil() {
  return (
    <footer className="border-t border-gray-200 bg-white text-sm text-gray-500 px-4 py-10">
      <div className="container">
        <div className="row gy-5">
          {/* Columna 1: Marca y redes */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="mb-3">
              <img src="/sweetzLogo.png" alt="Sweetz Logo" width="170" height="170" className="img-fluid" />
            </div>
            <p className="text-secondary small">Síguenos en nuestras redes</p>
            <div className="d-flex gap-3 fs-5 text-muted">
              <a href="#" aria-label="Twitter" className="link-secondary link-hover">🐦</a>
              <a href="#" aria-label="Facebook" className="link-secondary link-hover">📘</a>
              <a href="#" aria-label="Instagram" className="link-secondary link-hover">📸</a>
              <a href="#" aria-label="YouTube" className="link-secondary link-hover">▶️</a>
            </div>
          </div>

          {/* Columna 2: Acerca de */}
          <div className="col-6 col-md-3">
            <h6 className="text-uppercase text-muted fw-bold mb-2">Acerca de</h6>
            <ul className="list-unstyled small text-secondary">
              {[
                'Términos de uso',
                'Política de Privacidad',
                'Política de Cookies',
                'Preguntas de Creador',
                'Preguntas de Usuario',
                'Reembolsos',
                'Contáctenos',
                'Blog',
              ].map((item, i) => (
                <li key={i} className="mb-1">
                  <a href="#" className="text-secondary text-decoration-none hover-opacity-75">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Categorías */}
          <div className="col-6 col-md-3">
            <h6 className="text-uppercase text-muted fw-bold mb-2">Categorías</h6>
            <ul className="list-unstyled small text-secondary">
              <li>
                <a href="#" className="text-secondary text-decoration-none hover-opacity-75">Explorar →</a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Enlaces */}
          <div className="col-12 col-md-3">
            <h6 className="text-uppercase text-muted fw-bold mb-2">Enlaces</h6>
            <ul className="list-unstyled small text-secondary">
              {[
                'Mi perfil',
                'Editar perfil',
                'Mis suscripciones',
                'Cerrar sesión',
              ].map((link, i) => (
                <li key={i} className="mb-1">
                  <a href="#" className="text-secondary text-decoration-none hover-opacity-75">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-muted small mt-5">© 2025 Sweetz</div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        © 2025 Sweetz. Todos los derechos reservados.
      </div>
    </footer>
  )
}
