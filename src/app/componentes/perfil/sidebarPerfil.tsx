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
    '/views/perfil/contrasena': 'Contraseña',
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
    }
  };

  const getItemClass = (label: string) =>
    `list-group-item list-group-item-action ${
      activeItem === label ? 'active bg-purple text-white border-0' : ''
    }`;

  return (
    <>
      {/* Botón para móviles */}
      <div className="d-md-none mb-3 text-center">
        <button
          type="button"
          className="btn btn-purple text-white px-4 py-2 rounded-pill fw-semibold"
          style={{ backgroundColor: '#9c27b0' }}
          onClick={() => setMenuAbierto(!menuAbierto)}
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
            className="d-md-none border rounded p-3 bg-white shadow-sm mb-3"
          >
            {renderSidebar(handleMenuClick, getItemClass)}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar escritorio */}
      <div className="d-none d-md-block">
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
    <div className="list-group">
      <div className="mb-2 small text-muted fw-bold text-uppercase">Cuenta</div>
      <button className={getClass('Mi perfil')} onClick={() => handleClick('Mi perfil')}>👤 Mi perfil</button>
      <button className={getClass('Editar perfil')} onClick={() => handleClick('Editar perfil')}>✏️ Editar perfil</button>
      <button className={getClass('Billetera')} onClick={() => handleClick('Billetera')}>💼 Billetera</button>
      <button className={getClass('Sé un creador')} onClick={() => handleClick('Sé un creador')}>⭐ ¡Sé un creador!</button>

      <div className="my-3 border-top" />

      <div className="mb-2 small text-muted fw-bold text-uppercase">Suscripción</div>
      <button className={getClass('Mis suscripciones')} onClick={() => handleClick('Mis suscripciones')}>🧾 Mis suscripciones</button>

      <div className="my-3 border-top" />

      <div className="mb-2 small text-muted fw-bold text-uppercase">Privacidad y Seguridad</div>
      <button className={getClass('Privacidad y seguridad')} onClick={() => handleClick('Privacidad y seguridad')}>🛡️ Privacidad y seguridad</button>
      <button className={getClass('Contraseña')} onClick={() => handleClick('Contraseña')}>🔑 Contraseña</button>
      <button className={getClass('Usuarios restringidos')} onClick={() => handleClick('Usuarios restringidos')}>🚫 Usuarios restringidos</button>

      <div className="my-3 border-top" />

      <div className="mb-2 small text-muted fw-bold text-uppercase">Pagos</div>
      <button className={getClass('Pagos')} onClick={() => handleClick('Pagos')}>📄 Pagos</button>
    </div>
  );
}
