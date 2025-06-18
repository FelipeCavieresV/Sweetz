'use client';

import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';


export default function ContraseñaPage() {
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
                <h2 className="h5 fw-bold mb-2 d-flex align-items-center gap-2">🔐 Cambiar contraseña</h2>
                <p className="text-muted small mb-4">Actualiza tu contraseña ingresando la actual y una nueva.</p>

                <div className="bg-white border rounded-4 shadow-sm p-3 mb-3">
                  <form onSubmit={(e) => e.preventDefault()} className="row g-3">
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Contraseña actual</label>
                      <input
                        type="password"
                        placeholder="Ingresa tu contraseña actual"
                        className="form-control"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-semibold">Nueva contraseña</label>
                      <input
                        type="password"
                        placeholder="Ingresa una nueva contraseña"
                        className="form-control"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-semibold">Confirmar nueva contraseña</label>
                      <input
                        type="password"
                        placeholder="Repite la nueva contraseña"
                        className="form-control"
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 fw-semibold py-2"
                        style={{ backgroundColor: '#9c27b0', borderColor: '#9c27b0' }}
                      >
                        Guardar nueva contraseña
                      </button>
                    </div>
                  </form>
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