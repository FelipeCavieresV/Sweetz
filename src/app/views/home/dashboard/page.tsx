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
  Compass,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Dancing_Script } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'
import Publicaciones from '../../../componentes/dashboard/publicaciones'
import SidebarDashboard from '../../../componentes/dashboard/sidebarDashboard'
import ExplorarCreadores from '../../../componentes/dashboard/explorarCreadores'

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] })

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

  return (
    <div className="container-lg pt-2">
  <div className="row h-100">
        {/* Columna izquierda */}
        <div className="col-md-2">
          <SidebarDashboard />
        </div>

        {/* Columna central */}
        {/* Columna central con scroll solo en publicaciones */}
        <div
          className="col-md-6 p-0 second"
          style={{
            height: 'calc(100vh - 80px)', // ajusta según tu navbar
            overflowY: 'scroll', // sigue scrollable
            paddingRight: '8px',

            // Oculta scrollbars
            scrollbarWidth: 'none',        // Firefox
            msOverflowStyle: 'none',       // IE y Edge
          }}
        >
          <style jsx>{`
            .second::-webkit-scrollbar {
              display: none; /* Chrome, Safari */
            }
          `}</style>
          <Publicaciones />
        </div>

        {/* Columna derecha */}
        <div className="col-md-4  mb-4  first">
          <ExplorarCreadores />
        </div>
      </div>
    </div>

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
      className="btn btn-link text-start text-dark w-100 d-flex align-items-center gap-2 px-3 py-2 text-decoration-none"
      style={{ fontSize: '14px' }}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
