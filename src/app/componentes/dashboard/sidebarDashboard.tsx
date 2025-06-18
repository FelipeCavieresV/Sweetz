'use client'

import { useRouter, usePathname } from 'next/navigation'
import {
  Home,
  Users,
  DollarSign,
  UserPlus,
  Bookmark,
  Compass,
  LogOut,
  Mail
} from 'lucide-react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SidebarDashboard() {
  const router = useRouter()
  const pathname = usePathname()

  const handleRedirect = (path: string) => {
    router.push(path)
  }

  const routeMap = {
    '/views/home/dashboard': 'Home',
    '/views/home/profile': 'Mi perfil',
    '/views/perfil/billetera': 'Billetera',
    '/views/home/mensajes': 'Mensajes'
  }

  return (
    <div className="bg-white rounded-4 shadow-sm p-3 text-start w-100">
      <DropdownItem
        icon={<Home size={18} />}
        label="Home"
        active={pathname === '/views/home/dashboard'}
        onClick={() => handleRedirect('/views/home/dashboard')}
      />
      <DropdownItem
        icon={<Users size={18} />}
        label="Mi perfil"
        active={pathname === '/views/home/profile'}
        onClick={() => handleRedirect('/views/home/profile')}
      />
      <DropdownItem
        icon={<DollarSign size={18} />}
        label="Billetera: $0.00"
        active={pathname === '/views/perfil/billetera'}
        onClick={() => handleRedirect('/views/perfil/billetera')}
      />
      <DropdownItem
        icon={<UserPlus size={18} />}
        label="Mis suscripciones"
        onClick={() => handleRedirect('/views/perfil/suscripciones')}
      />
      <DropdownItem
        icon={<Bookmark size={18} />}
        label="Marcadores"
      />
      <DropdownItem
        icon={<Compass size={18} />}
        label="Explorar"
      />
      <DropdownItem
        icon={<Mail size={18} />}
        label="Mensajes"
        active={pathname === '/views/home/mensajes'}
        onClick={() => handleRedirect('/views/home/mensajes')}
      />
      <DropdownItem
        icon={<LogOut size={18} />}
        label="Cerrar sesión"
        onClick={() => handleRedirect('/')}
      />
    </div>
  )
}

function DropdownItem({
  icon,
  label,
  onClick,
  active = false
}: {
  icon: React.ReactNode
  label: string
  onClick?: () => void
  active?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`btn w-100 d-flex align-items-center gap-2 text-start py-2 border-1 ${
        active ? 'text-white' : 'text-dark'
      }`}
      style={{
        backgroundColor: active ? '#8e24aa' : 'transparent',
        transition: 'background-color 0.2s, color 0.2s',
        cursor: 'pointer',
      }}
      onMouseOver={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = '#f3e8f6'
          e.currentTarget.style.color = '#8e24aa'
        }
      }}
      onMouseOut={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = '#333'
        }
      }}
    >
      {icon}
      <span className="fw-medium">{label}</span>
    </button>
  )
}
