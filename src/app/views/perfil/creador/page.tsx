'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';

export default function CreadorPage() {
  return (
    <>
      <main className="min-vh-100 bg-light text-dark py-4 px-2">
        <div className="container">
          <div className="row justify-content-center">
            {/* Sidebar */}
            <div className="col-md-3">
              <SidebarPerfil />
            </div>

            {/* Formulario principal */}
            <div className="col-md-7">
              <h2 className="h5 fw-bold text-dark mb-1">✔ Verificar cuenta</h2>
              <p className="text-muted mb-4">Ingrese su dirección, ciudad, código postal y adjunte foto de su cédula de identidad</p>

              <div className="alert alert-warning small mb-4">
                ⚠️ Si eres chilena(o) solo debes enviar foto de la parte frontal de tu cédula. Envía una foto perfectamente legible de tu cédula de identidad o pasaporte (recomendado), no se aceptarán fotocopias, fotos borrosas o en mala calidad u otros documentos. Si tu cuenta es en pareja, debes enviar las dos cédulas de identidad en una sola foto.
              </div>

              <form className="mb-5">
                <div className="mb-3">
                  <input type="text" placeholder="País" className="form-control" />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder="Dirección" className="form-control" />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder="Ciudad" className="form-control" />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder="Comuna" className="form-control" />
                </div>
                <div className="mb-4">
                  <input type="text" placeholder="Código Postal" className="form-control" />
                </div>

                <div className="border border-2 border-dashed rounded p-3 text-center text-secondary mb-4">
                  <label className="form-label d-block">
                    <span className="fw-semibold">Subir imagen (JPG, PNG, GIF) o ZIP – Máximo: 30MB</span>
                    <input type="file" className="form-control mt-2" />
                  </label>
                  <p className="text-muted small mt-2">
                    Sube una foto de tu cédula de identidad o pasaporte donde se vea claramente tu número de identificación y tu fecha de nacimiento.
                  </p>
                </div>

                <button type="submit" className="btn btn-success w-100 fw-semibold py-2">
                  Enviar para aprobación
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <FooterPerfil />
    </>
  );
}
