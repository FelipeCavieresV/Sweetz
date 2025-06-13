'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // para App Router
import { motion, AnimatePresence } from 'framer-motion';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';
import router from 'next/router';

export default function SuscripcionesPage() {
  

 return (
  <>
    <main className="min-h-screen bg-[#f9fbfc] text-gray-700 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl w-full max-w-6xl bg-white rounded-lg shadow overflow-hidden">
        {/* Sidebar en escritorio */}

        <div className="w-full md:w-64 p-4 border-r border-gray-200 md:border-r-0 md:pr-0">
        <SidebarPerfil />
        </div>

        {/* Formulario principal */}
        <section className="flex-1 w-full p-4 md:p-10 ">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-1">📄 Mis suscripciones</h2>
            <p className="text-gray-500 text-sm mb-6">Usuarios a los que te has suscrito a su contenido</p>

            <div className="overflow-x-auto shadow rounded-lg max-h-[820px] overflow-y-auto">
                <table className="min-w-full bg-white border border-gray-200 text-sm text-left">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                    <tr>
                    <th className="p-4">Suscrito</th>
                    <th className="p-4">Fecha</th>
                    <th className="p-4">Intervalo</th>
                    <th className="p-4">Termina en</th>
                    <th className="p-4">Estado</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-200">
                    {[
                    {
                        avatar: '/avatar1.jpg',
                        name: 'Jhon 🖤',
                        fecha: '16/12/2024',
                        intervalo: 'Mensual',
                        fin: '16/01/2025',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar2.jpg',
                        name: ' 💋',
                        fecha: '11/11/2024',
                        intervalo: 'Mensual',
                        fin: '11/12/2024',
                        estado: 'SUSCRITO'
                    },
                    {
                        avatar: '/avatar3.jpg',
                        name: '🔥💋💄 M🐄🐄✨',
                        fecha: '08/04/2024',
                        intervalo: 'Mensual',
                        fin: '08/05/2024',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar1.jpg',
                        name: 'Emma Cole and Jhon 🖤',
                        fecha: '16/12/2024',
                        intervalo: 'Mensual',
                        fin: '16/01/2025',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar2.jpg',
                        name: '💋',
                        fecha: '11/11/2024',
                        intervalo: 'Mensual',
                        fin: '11/12/2024',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar3.jpg',
                        name: '🔥💋💄 m 🐄🐄✨',
                        fecha: '08/04/2024',
                        intervalo: 'Mensual',
                        fin: '08/05/2024',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar1.jpg',
                        name: 'asdasd🖤',
                        fecha: '16/12/2024',
                        intervalo: 'Mensual',
                        fin: '16/01/2025',
                        estado: 'SUSCRITO'
                    },
                    {
                        avatar: '/avatar2.jpg',
                        name: ' 💋',
                        fecha: '11/11/2024',
                        intervalo: 'Mensual',
                        fin: '11/12/2024',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar3.jpg',
                        name: '🔥💋 M 🐄🐄✨',
                        fecha: '08/04/2024',
                        intervalo: 'Mensual',
                        fin: '08/05/2024',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar1.jpg',
                        name: 'Jhon 🖤',
                        fecha: '16/12/2024',
                        intervalo: 'Mensual',
                        fin: '16/01/2025',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar2.jpg',
                        name: ' 💋',
                        fecha: '11/11/2024',
                        intervalo: 'Mensual',
                        fin: '11/12/2024',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar3.jpg',
                        name: '🔥💋asd 🐄🐄✨',
                        fecha: '08/04/2024',
                        intervalo: 'Mensual',
                        fin: '08/05/2024',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar1.jpg',
                        name: 'asdfasd 🖤',
                        fecha: '16/12/2024',
                        intervalo: 'Mensual',
                        fin: '16/01/2025',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar2.jpg',
                        name: 'asdfasdfar 💋',
                        fecha: '11/11/2024',
                        intervalo: 'Mensual',
                        fin: '11/12/2024',
                        estado: 'CANCELADO'
                    },
                    {
                        avatar: '/avatar3.jpg',
                        name: '🔥💋💄 Masdf 🐄🐄✨',
                        fecha: '08/04/2024',
                        intervalo: 'Mensual',
                        fin: '08/05/2024',
                        estado: 'CANCELADO'
                    }
                    ].map((sub, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                        <td className="flex items-center gap-3 p-4">
                        <img
                            src={sub.avatar}
                            alt={sub.name}
                            className="w-10 h-10 rounded-full object-cover border"
                        />
                        <span className="text-[#9c27b0] font-semibold">{sub.name}</span>
                        </td>
                        <td className="p-4">{sub.fecha}</td>
                        <td className="p-4">{sub.intervalo}</td>
                        <td className="p-4">{sub.fin}</td>
                        <td className="p-4">
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {sub.estado}
                        </span>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </section>


      </div>

    </main>
    
      <FooterPerfil />
    </>
  );
}
