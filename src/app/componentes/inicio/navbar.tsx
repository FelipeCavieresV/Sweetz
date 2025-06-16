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
  Sun,
  LogOut,
  User
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#E8E3E7] text-gray-800 shadow-md border-b border-gray-300">
      <div className="relative px-6 py-3 flex items-center justify-between h-[72px]">
        {/* Botón izquierdo - Editar perfil */}
        <div className="z-30">
          <button
            className="bg-[#8e24aa] text-white text-[10px] sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-[#9c27b0] transition cursor-pointer"
            onClick={() => router.push('/views/perfil/editarPerfil')}
          >
            ✏️ Editar perfil
          </button>

        </div>

        {/* Logo central */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <h4
            className={`${dancing.className} text-5xl sm:text-5xl md:text-5xl text-[#8e24aa] mb-2 text-center tracking-wide drop-shadow-[0_5px_10px_rgba(156,39,176,0.5)] hover:drop-shadow-[0_5px_20px_rgba(156,39,176,0.8)] transition-all duration-300 ease-in-out`}
          >
            Sweetz
          </h4>
        </div>

        {/* Íconos derecha */}
        <div className="flex items-center gap-4 z-30 ml-auto">
          <nav className="hidden sm:flex gap-4 items-center text-gray-600 text-sm">
            <Home className="w-5 h-5 cursor-pointer hover:text-[#8e24aa]" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-[#8e24aa]" />
            <Activity className="w-5 h-5 cursor-pointer hover:text-[#8e24aa]" />
          </nav>

          {/* Dropdown usuario */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="w-8 h-8 rounded-full bg-gray-500 cursor-pointer flex items-center justify-center hover:ring-2 hover:ring-[#8e24aa]"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <User className="w-5 h-5 text-white" />
            </div>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-gray-100 text-gray-800 rounded-lg shadow-lg py-2 text-sm border border-gray-300 z-50"
                >
                  {/* Solo visible en móvil */}
                  <div className="block sm:hidden border-b border-gray-300 mb-2 pb-2">
                    <DropdownItem icon={<Home className="w-4 h-4" />} label="Inicio" />
                    <DropdownItem icon={<Mail className="w-4 h-4" />} label="Mensajes" />
                    <DropdownItem icon={<Activity className="w-4 h-4" />} label="Actividad" />
                  </div>

                  <DropdownItem
  icon={<DollarSign className="w-4 h-4" />}
  label="Billetera: $0.00"
  onClick={() => {
    router.push('/views/perfil/billetera')
    setDropdownOpen(false)
  }}
/>
<DropdownItem
  icon={<Users className="w-4 h-4" />}
  label="Mi perfil"
  onClick={() => {
    router.push('/views/home/profile')
    setDropdownOpen(false)
  }}
/>
<DropdownItem
  icon={<UserPlus className="w-4 h-4" />}
  label="Mis suscripciones"
  onClick={() => {
    router.push('/views/home/dashboard')
    setDropdownOpen(false)
  }}
/>
<DropdownItem
  icon={<Bookmark className="w-4 h-4" />}
  label="Marcadores"
  onClick={() => {
    router.push('/views/home/dashboard')
    setDropdownOpen(false)
  }}
/>
<DropdownItem
  icon={<Star className="w-4 h-4" />}
  label="¡Sé un creador!"
  onClick={() => {
    router.push('/views/perfil/creador')
    setDropdownOpen(false)
  }}
/>
<DropdownItem
  icon={<LogOut className="w-4 h-4" />}
  label="Cerrar sesión"
  onClick={() => {
    router.push('/')
    setDropdownOpen(false)
  }}
/>
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
      onClick={onClick}
      className="flex items-center w-full px-4 py-2 text-gray-800 hover:text-[#8e24aa] hover:bg-[#e1dbe0] transition-colors duration-200 text-left gap-3 cursor-pointer"
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
