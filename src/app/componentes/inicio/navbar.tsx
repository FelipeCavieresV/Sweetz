'use client'

import {
  Home,
  Mail,
  Activity,
  DollarSign,
  Users,
  UserPlus,
  Bookmark,
  Star,
  LogOut,
  User,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Dancing_Script } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

export default function Navbar() {
  const router = useRouter()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm " style={{ backgroundColor: '#E8E3E7', height: '72px' }}>
      <div className="container-fluid h-100 d-flex align-items-center justify-content-between px-3 px-md-4">

        {/* Botón izquierdo - Editar perfil */}
        <button
          className="btn btn-sm rounded-pill text-white fw-semibold"
          style={{ backgroundColor: '#8e24aa', fontSize: '12px', zIndex: 10 }}
          onClick={() => {
            console.log('Redirigiendo...')
            router.push('/views/perfil/editarPerfil')
          }}
        >
          ✏️ Editar perfil
        </button>

        {/* Logo central */}
        <div className="position-absolute start-50 translate-middle-x text-center pointer-events-none z-0">
          <img
            src="/sweetzLogo.png"
            alt="Sweetz Logo"
            style={{
              height: '65px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 5px 10px rgba(156,39,176,0.5))',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Íconos y dropdown */}
        <div className="d-flex align-items-center gap-3 ms-auto" style={{ zIndex: 100 }}>
          {/* Íconos */}
          <nav className="d-none d-sm-flex gap-3 text-muted">
            <Home
              className="cursor-pointer"
              style={{ width: 20, height: 20 }}
              onClick={() => router.push('/views/home/dashboard')}
            />
            <Mail
              className="cursor-pointer"
              style={{ width: 20, height: 20 }}
              onClick={() => router.push('/views/home/dashboard/mensajes')} // puedes ajustar esta ruta también si deseas
            />
            <Activity
              className="cursor-pointer"
              style={{ width: 20, height: 20 }}
              onClick={() => router.push('/views/home/activity')} // y esta también
            />
          </nav>

          {/* Dropdown usuario */}
          <div className="position-relative" ref={dropdownRef}>
            <div
              className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
              style={{ width: 32, height: 32, cursor: 'pointer' }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <User className="text-white" style={{ width: 20, height: 20 }} />
            </div>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="position-absolute end-0 mt-2 bg-white border rounded shadow-sm text-dark"
                  style={{ width: '230px', zIndex: 1051 }}
                >
                  {/* Visible solo en móvil */}
                  <div className="d-block d-sm-none border-bottom p-2">
                    <DropdownItem icon={<Home className="me-2" />} label="Inicio" />
                    <DropdownItem icon={<Mail className="me-2" />} label="Mensajes" />
                    <DropdownItem icon={<Activity className="me-2" />} label="Actividad" />
                  </div>

                  <DropdownItem icon={<DollarSign className="me-2" />} label="Billetera: $0.00" onClick={() => router.push('/views/perfil/billetera')} />
                  <DropdownItem icon={<Users className="me-2" />} label="Mi perfil" onClick={() => router.push('/views/home/profile')} />
                  <DropdownItem icon={<UserPlus className="me-2" />} label="Mis suscripciones" onClick={() => router.push('/views/home/dashboard')} />
                  <DropdownItem icon={<Bookmark className="me-2" />} label="Marcadores" onClick={() => router.push('/views/home/dashboard')} />
                  <DropdownItem icon={<Star className="me-2" />} label="¡Sé un creador!" onClick={() => router.push('/views/perfil/creador')} />
                  <DropdownItem icon={<LogOut className="me-2" />} label="Cerrar sesión" onClick={() => router.push('/')} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}

function DropdownItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}) {
  return (
    <button
      onClick={() => {
        onClick?.()
      }}
      className="btn btn-link text-start text-dark w-100 d-flex align-items-center gap-2 px-3 py-2 text-decoration-none"
      style={{ fontSize: '14px' }}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
