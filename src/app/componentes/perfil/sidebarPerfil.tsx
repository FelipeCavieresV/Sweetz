'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function SidebarPerfil() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const routeToLabelMap: Record<string, string> = {
    '/views/home/profile': 'Mi perfil',
    '/views/perfil/editarPerfil': 'Editar perfil',
    '/views/perfil/billetera': 'Billetera',
    '/views/perfil/creador': 'Sé un creador',
    '/views/perfil/suscripciones': 'Mis suscripciones',
    '/views/perfil/privacidadSeguridad': 'Privacidad y seguridad',
    '/views/perfil/contrasena': 'Contraseña', // ← sin tilde
    '/views/perfil/usuarioRestringidos': 'Usuarios restringidos',
    '/views/perfil/pagos': 'Pagos'
    };

  const activeItem = routeToLabelMap[pathname] || '';

  const handleMenuClick = (item: string) => {
    setMenuAbierto(false);
    const labelToPathMap: Record<string, string> = Object.fromEntries(
      Object.entries(routeToLabelMap).map(([path, label]) => [label, path])
    );

    if (labelToPathMap[item]) {
      router.push(labelToPathMap[item]);
    } else {
      alert(`Haz hecho clic en: ${item}`);
    }
  };

  const getItemClass = (label: string) =>
    `cursor-pointer flex items-center gap-4 rounded px-2 py-1 transition ${
      activeItem === label
        ? 'text-white bg-[#9c27b0] font-semibold hover:brightness-110'
        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
    }`;

  return (
    <>
      {/* Botón móvil */}
      <div className="block md:hidden mb-4 text-center">
        <button
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="bg-[#9c27b0] text-white font-semibold py-2 px-6 rounded-full"
        >
          {menuAbierto ? 'Cerrar menú' : 'Menú'}
        </button>
      </div>

      {/* Sidebar móvil */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="block md:hidden border border-gray-200 rounded-lg p-4 bg-white text-sm space-y-6 mb-6 shadow"
          >
            {renderSidebar(handleMenuClick, getItemClass)}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar escritorio */}
      <div className="hidden md:block">
        {renderSidebar(handleMenuClick, getItemClass)}
      </div>
    </>
  );
}

function renderSidebar(
  handleClick: (item: string) => void,
  getClass: (label: string) => string
) {
  return (
    <div className="space-y-6 text-sm">
      <section>
        <h3 className="text-xs text-gray-500 mb-2 font-semibold uppercase">Cuenta</h3>
        <ul className="space-y-3">
          <li className={getClass('Mi perfil')} onClick={() => handleClick('Mi perfil')}>👤 Mi perfil</li>
          <li className={getClass('Editar perfil')} onClick={() => handleClick('Editar perfil')}>✏️ Editar perfil</li>
          <li className={getClass('Billetera')} onClick={() => handleClick('Billetera')}>💼 Billetera</li>
          <li className={getClass('Sé un creador')} onClick={() => handleClick('Sé un creador')}>⭐ ¡Sé un creador!</li>
        </ul>
      </section>

      <hr className="border-gray-200" />

      <section>
        <h3 className="text-xs text-gray-500 mb-2 font-semibold uppercase">Suscripción</h3>
        <ul className="space-y-3">
          <li className={getClass('Mis suscripciones')} onClick={() => handleClick('Mis suscripciones')}>🧾 Mis suscripciones</li>
        </ul>
      </section>

      <hr className="border-gray-200" />

      <section>
        <h3 className="text-xs text-gray-500 mb-2 font-semibold uppercase">Privacidad y Seguridad</h3>
        <ul className="space-y-4">
          <li className={getClass('Privacidad y seguridad')} onClick={() => handleClick('Privacidad y seguridad')}>🛡️ Privacidad y seguridad</li>
          <li className={getClass('Contraseña')} onClick={() => handleClick('Contraseña')}>🔑 Contraseña</li>
          <li className={getClass('Usuarios restringidos')} onClick={() => handleClick('Usuarios restringidos')}>🚫 Usuarios restringidos</li>
        </ul>
      </section>

      <hr className="border-gray-200" />

      <section>
        <h3 className="text-xs text-gray-500 mb-2 font-semibold uppercase">Pagos</h3>
        <ul className="space-y-4">
          <li className={getClass('Pagos')} onClick={() => handleClick('Pagos')}>📄 Pagos</li>
        </ul>
      </section>
    </div>
  );
}
