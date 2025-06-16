'use client'

import { useRouter } from 'next/navigation'
import { Users, DollarSign, UserPlus, Bookmark, Compass, LogOut, Mail } from 'lucide-react'


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

export default function SidebarDashboard() {
  const router = useRouter()

  const handleRedirect = (path: string) => {
    router.push(path)
  }

  return (
    <div className="w-full md:w-1/3 bg-white rounded-lg text-center">
      <div className="w-full bg-[#E8E3E7] text-gray-800 rounded-lg shadow-sm py-2 text-sm border border-gray-300">
        <DropdownItem icon={<Users className="w-4 h-4" />} label="Mi perfil" onClick={() => handleRedirect('/views/home/profile')} />
        <DropdownItem icon={<DollarSign className="w-4 h-4" />} label="Billetera: $0.00" onClick={() => handleRedirect('/views/perfil/billetera')} />
        <DropdownItem icon={<UserPlus className="w-4 h-4" />} label="Mis suscripciones" onClick={() => handleRedirect('/views/home/dashboard')} />
        <DropdownItem icon={<Bookmark className="w-4 h-4" />} label="Marcadores" onClick={() => handleRedirect('/views/home/dashboard')} />
        <DropdownItem icon={<Compass className="w-4 h-4" />} label="Explorar" onClick={() => handleRedirect('/views/home/dashboard')} />
        <DropdownItem icon={<Mail className="w-4 h-4" />} label="Mensajes" onClick={() => handleRedirect('/views/home/mensajes')} />
        <DropdownItem icon={<LogOut className="w-4 h-4" />} label="Cerrar sesión" onClick={() => handleRedirect('/')} />
      </div>

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
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-black/35 p-4 rounded-xl">
              <div className="flex items-center mb-2">
                <img src={creator.avatar} alt={creator.name} className="w-16 h-16 rounded-full border border-white mr-3" />
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
      className="flex items-center w-full px-4 py-2 text-gray-800 hover:text-[#8e24aa] hover:bg-[#e1dbe0] transition-colors duration-200 text-left gap-3 cursor-pointer"
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
