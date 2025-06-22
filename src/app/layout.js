// src/app/layout.tsx
'use client'

import './globals.css'
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Navbar from './componentes/inicio/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export default function RootLayout({ children }) {
  const pathname = usePathname()

  // No mostrar el navbar en la página de login ("/")
  const showNavbar = pathname !== '/'

  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased`}>
        {showNavbar && <Navbar />}
        <main className={showNavbar ? 'pt-[72px] min-h-screen' : 'min-h-screen'}>
          {children}
        </main>
      </body>
    </html>
  )
}
