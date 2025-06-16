'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';

export default function PrivacidadSeguridadPage() {
  const [verificacion2FA, setVerificacion2FA] = useState(false);
  const [perfilPrivado, setPerfilPrivado] = useState(true);

  return (
    <>
      <main className="min-h-screen bg-[#f9fbfc] text-gray-700 flex md:items-center md:justify-center p-2 md:p-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow overflow-hidden">
          {/* Sidebar en escritorio */}
          <div className="w-full md:w-64 md:h-screen sticky top-0 p-4 border-r border-gray-200 bg-white overflow-y-auto">
            <SidebarPerfil />
          </div>

          {/* Contenido principal */}
          <section className="flex-1 w-full p-4 md:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-2">
              🔐 Privacidad y seguridad
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Revisa y administra tus opciones de privacidad, visibilidad y seguridad de tu cuenta.
            </p>

            {/* Último acceso */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-2">Actividad de inicio de sesión</h3>
              <p className="text-sm text-gray-500">Último acceso: 15 de junio de 2025, 09:12 desde Viña del Mar, Chile.</p>
              <p className="text-sm text-gray-500 mt-1">Sesiones activas: 2 dispositivos</p>
              <button className="mt-3 bg-red-100 text-red-700 text-sm font-medium px-4 py-2 rounded hover:bg-red-200 transition">
                Cerrar todas las sesiones
              </button>
            </div>

            {/* Verificación 2FA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-2">Verificación en dos pasos</h3>
              <p className="text-sm text-gray-500">Protege tu cuenta con una capa adicional de seguridad.</p>
              <div className="mt-3 flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${verificacion2FA ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                  {verificacion2FA ? 'Activada' : 'Desactivada'}
                </span>
                <button
                  className="bg-[#9c27b0] text-white text-sm font-medium px-4 py-2 rounded hover:brightness-110 transition"
                  onClick={() => setVerificacion2FA(!verificacion2FA)}
                >
                  {verificacion2FA ? 'Desactivar' : 'Activar'}
                </button>
              </div>
            </div>

            {/* Privacidad del perfil */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-2">Visibilidad del perfil</h3>
              <p className="text-sm text-gray-500">Controla quién puede ver tu perfil y publicaciones.</p>
              <div className="mt-3 flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${perfilPrivado ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                  {perfilPrivado ? 'Privado' : 'Público'}
                </span>
                <button
                  className="bg-[#9c27b0] text-white text-sm font-medium px-4 py-2 rounded hover:brightness-110 transition"
                  onClick={() => setPerfilPrivado(!perfilPrivado)}
                >
                  Cambiar a {perfilPrivado ? 'Público' : 'Privado'}
                </button>
              </div>
            </div>

            {/* Cierre de cuenta */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-700 mb-2">Eliminar cuenta</h3>
              <p className="text-sm text-red-500">
                Esta acción eliminará permanentemente tu cuenta y todos tus datos. No se puede deshacer.
              </p>
              <button className="mt-3 bg-red-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-red-700 transition">
                Eliminar cuenta
              </button>
            </div>
          </section>
        </div>
      </main>

      <FooterPerfil />
    </>
  );
}
