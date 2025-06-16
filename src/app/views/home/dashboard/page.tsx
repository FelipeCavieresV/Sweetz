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
import SidebarDashboard from '../../../componentes/dashboard/sidebarDashboard'


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
          <SidebarDashboard />
          

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
