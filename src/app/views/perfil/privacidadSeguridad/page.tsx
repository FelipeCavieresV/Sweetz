'use client';

import { useState } from 'react';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';

export default function PrivacidadSeguridadPage() {
  const [verificacion2FA, setVerificacion2FA] = useState(false);
  const [perfilPrivado, setPerfilPrivado] = useState(true);

  return (
    <>
      <main className="min-vh-100 bg-light text-dark py-4 px-2">
        <div className="container">
          <div className="row justify-content-center">
            {/* Sidebar */}
            <div className="col-md-3">
              <SidebarPerfil />
            </div>

            {/* Contenido principal */}
            <div className="col-md-8 col-lg-7">
              <div className="px-2 px-md-0">
                <h2 className="h5 fw-bold mb-2 d-flex align-items-center gap-2">🔐 Privacidad y seguridad</h2>
                <p className="text-muted small mb-4">Revisa y administra tus opciones de privacidad, visibilidad y seguridad de tu cuenta.</p>

                {/* Actividad de sesión */}
                <div className="bg-white border rounded-4 shadow-sm p-3 mb-3">
                  <h5 className="fw-semibold mb-2 fs-6">Actividad de inicio de sesión</h5>
                  <p className="small text-muted mb-1">Último acceso: 15 de junio de 2025, 09:12 desde Viña del Mar, Chile.</p>
                  <p className="small text-muted">Sesiones activas: 2 dispositivos</p>
                  <button className="btn btn-sm btn-outline-danger mt-2">Cerrar todas las sesiones</button>
                </div>

                {/* Verificación 2FA */}
                <div className="bg-white border rounded-4 shadow-sm p-3 mb-3">
                  <h5 className="fw-semibold mb-2 fs-6">Verificación en dos pasos</h5>
                  <p className="small text-muted">Protege tu cuenta con una capa adicional de seguridad.</p>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <span className={`badge px-3 py-2 rounded-pill small fw-semibold ${verificacion2FA ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}`}>
                      {verificacion2FA ? 'Activada' : 'Desactivada'}
                    </span>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => setVerificacion2FA(!verificacion2FA)}
                    >
                      {verificacion2FA ? 'Desactivar' : 'Activar'}
                    </button>
                  </div>
                </div>

                {/* Privacidad de perfil */}
                <div className="bg-white border rounded-4 shadow-sm p-3 mb-3">
                  <h5 className="fw-semibold mb-2 fs-6">Visibilidad del perfil</h5>
                  <p className="small text-muted">Controla quién puede ver tu perfil y publicaciones.</p>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <span className={`badge px-3 py-2 rounded-pill small fw-semibold ${perfilPrivado ? 'bg-warning-subtle text-warning' : 'bg-info-subtle text-info'}`}>
                      {perfilPrivado ? 'Privado' : 'Público'}
                    </span>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => setPerfilPrivado(!perfilPrivado)}
                    >
                      Cambiar a {perfilPrivado ? 'Público' : 'Privado'}
                    </button>
                  </div>
                </div>

                {/* Eliminar cuenta */}
                <div className="bg-white border border-danger-subtle rounded-4 shadow-sm p-3">
                  <h5 className="fw-semibold text-danger mb-2 fs-6">Eliminar cuenta</h5>
                  <p className="small text-danger">Esta acción eliminará permanentemente tu cuenta y todos tus datos. No se puede deshacer.</p>
                  <button className="btn btn-sm btn-danger mt-2">Eliminar cuenta</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <FooterPerfil />
    </>
  );
}
