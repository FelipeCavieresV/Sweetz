'use client'

import {
  Home,
  Star,
  Users,
  LogOut,
  Activity,
  Mail,
  Bookmark,
  DollarSign,
  Sun,
  User,
  UserPlus,
  Compass
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Dancing_Script } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { motion, AnimatePresence } from "framer-motion";
import Publicaciones from '../../../componentes/dashboard/publicaciones'



const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export default function Dashboard() {
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

    const creators = [
      {
      name: 'Daniela Ruiz',
      username: '@Danielaoficialcl',
      stats: ['326', '796', '188', '2'],
      bg: '/images/bgdaniela.jpeg',   
      avatar: '/images/daniela.png'    
    },
    {
      name: 'Aliluffi',
      username: '@Aliluffi',
      stats: ['32', '27', '24', '0'],
      bg: '/images/bgdaniela.jpeg',   
      avatar: '/images/daniela.png'   
    },
    {
      name: 'Dannyy Blonde',
      username: '@Dannyyblonde',
      stats: ['560', '589', '453', '19'],
      bg: '/images/bgdaniela.jpeg',   
      avatar: '/images/daniela.png'   
    },
    {
      name: 'Nicoblock',
      username: '@Nicoblock',
      stats: ['1.3k', '1.1k', '291', '0'],
      bg: '/images/bgdaniela.jpeg',   
      avatar: '/images/daniela.png'   
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-[32px]">
      <div className="max-w-7xl mx-auto mt-5 px-4">
        <div className="flex flex-col md:flex-row justify-center gap-4">

          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-white  rounded-lg text-center ">
            <div className="w-full bg-[#E8E3E7] text-gray-800 rounded-lg shadow-sm py-2 text-sm border border-gray-300">
              <DropdownItem icon={<Users className="w-4 h-4" />} label="Mi perfil" />
              <DropdownItem icon={<DollarSign className="w-4 h-4" />} label="Billetera: $0.00" />
              <DropdownItem icon={<UserPlus className="w-4 h-4" />} label="Mis suscripciones" />
              <DropdownItem icon={<Bookmark className="w-4 h-4" />} label="Marcadores" />
              <DropdownItem icon={<Compass className="w-4 h-4" />} label="Explorar" />
              <DropdownItem
                icon={<LogOut className="w-4 h-4" />}
                label="Cerrar sesión"
                onClick={() => router.push('/')}
              />
            </div>

            {/* Explorar creadores */}
            <div className="mt-4">
              <h5 className="text-left text-gray-900 text-ms mb-2">Explorar creadores</h5>
              {creators.map((creator, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl overflow-hidden text-left text-white mb-3 bg-gray-900"
                  style={{
                    backgroundImage: `url(${creator.bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="bg-black/35 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-16 h-16 rounded-full border border-white mr-3"
                      />
                      <div>
                        <div className="font-bold">{creator.name}</div>
                        <div className="text-sm text-white-300">{creator.username}</div>
                      </div>
                    </div>
                    <div className="flex text-xs gap-4 mt-1 text-white">
                      <span className="bg-gray-600 px-2 py-1 rounded-full">📷 {creator.stats[0]}</span>
                      <span className="bg-gray-600 px-2 py-1 rounded-full">📹 {creator.stats[1]}</span>
                      <span className="bg-gray-600 px-2 py-1 rounded-full">📁 {creator.stats[2]}</span>
                      <span className="bg-gray-600 px-2 py-1 rounded-full">💬 {creator.stats[3]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="text-gray-400 text-xs text-left mt-6 space-y-1">
              <p>© 2025 Sweetz</p>
              <div className="flex flex-wrap gap-x-3">
                <a href="#" className="text-gray-400 hover:underline">Términos de uso</a>
                <a href="#" className="text-gray-400 hover:underline">Política de Privacidad</a>
                <a href="#" className="text-gray-400 hover:underline">Política de Cookies</a>
                <a href="#" className="text-gray-400 hover:underline">Preguntas de Creador</a>
                <a href="#" className="text-gray-400 hover:underline">Preguntas de Usuario</a>
                <a href="#" className="text-gray-400 hover:underline">Reembolsos</a>
                <a href="#" className="text-gray-400 hover:underline">Contáctenos</a>
                <a href="#" className="text-gray-400 hover:underline">Blog</a>
                <a href="#" className="text-gray-400 hover:underline">🌐 Español</a>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="flex-1">
            <Publicaciones />
          </div>

        </div>
      </div>
    </div>
  )
}

function DropdownItem({
  icon,
  label,
  onClick
}: {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center w-full px-4 py-2 text-gray-800 hover:text-[#8e24aa] hover:bg-[#e1dbe0] transition-colors duration-200 text-left gap-3"
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
