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
  Compass,
  Bell,
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
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm" style={{ backgroundColor: '#E8E3E7', height: '72px' }}>
      <div className="container-fluid h-100 d-flex align-items-center justify-content-between px-3 px-md-4">

        {/* Botón izquierdo - Editar perfil */}
        <button
          className="btn btn-sm rounded-pill text-white fw-semibold"
          style={{ backgroundColor: '#8e24aa', fontSize: '12px', zIndex: 10 }}
          onClick={() => router.push('/views/perfil/editarPerfil')}
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
            <Home className="cursor-pointer" style={{ width: 20, height: 20 }} onClick={() => router.push('/views/home/dashboard')} />
            <Mail className="cursor-pointer" style={{ width: 20, height: 20 }} onClick={() => router.push('/views/home/dashboard/mensajes')} />
            <Compass className="cursor-pointer" style={{ width: 20, height: 20 }} onClick={() => router.push('/views/home/explorar')} />
            <Bell className="cursor-pointer" style={{ width: 20, height: 20 }} onClick={() => router.push('/views/home/notificaciones')} />
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
                    <DropdownItem icon={<Home className="me-2" />} label="Inicio" onClick={() => router.push('/views/home/dashboard')} closeDropdown={() => setDropdownOpen(false)} />
                    <DropdownItem icon={<Mail className="me-2" />} label="Mensajes" onClick={() => router.push('/views/home/dashboard/mensajes')} closeDropdown={() => setDropdownOpen(false)} />
                    <DropdownItem icon={<Bell className="me-2" />} label="Notificaciones" onClick={() => router.push('/views/home/notificaciones')} closeDropdown={() => setDropdownOpen(false)} />
                    <DropdownItem icon={<Compass className="me-2" />} label="Explorar" onClick={() => router.push('/views/home/explorar')} closeDropdown={() => setDropdownOpen(false)} />
                    
                  </div>

                  <DropdownItem icon={<DollarSign className="me-2" />} label="Billetera: $0.00" onClick={() => router.push('/views/perfil/billetera')} closeDropdown={() => setDropdownOpen(false)} />
                  <DropdownItem icon={<Users className="me-2" />} label="Mi perfil" onClick={() => router.push('/views/home/profile')} closeDropdown={() => setDropdownOpen(false)} />
                  <DropdownItem icon={<UserPlus className="me-2" />} label="Mis suscripciones" onClick={() => router.push('/views/home/dashboard')} closeDropdown={() => setDropdownOpen(false)} />
                  <DropdownItem icon={<Bookmark className="me-2" />} label="Marcadores" onClick={() => router.push('/views/home/dashboard')} closeDropdown={() => setDropdownOpen(false)} />
                  <DropdownItem icon={<Star className="me-2" />} label="¡Sé un creador!" onClick={() => router.push('/views/perfil/creador')} closeDropdown={() => setDropdownOpen(false)} />
                  <DropdownItem icon={<LogOut className="me-2" />} label="Cerrar sesión" onClick={() => router.push('/')} closeDropdown={() => setDropdownOpen(false)} />
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
  closeDropdown,
}: {
  icon: React.ReactNode
  label: string
  onClick?: () => void
  closeDropdown?: () => void
}) {
  return (
    <button
      onClick={() => {
        onClick?.()
        closeDropdown?.()
      }}
      className="btn btn-link text-start text-dark w-100 d-flex align-items-center gap-2 px-3 py-2 text-decoration-none"
      style={{ fontSize: '14px' }}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}