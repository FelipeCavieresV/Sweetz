'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';

export default function SuscripcionesPage() {
  return (
    <>
      <main className="min-vh-100 bg-light text-dark py-4 px-2">
        <div className="container">
          <div className="row justify-content-center">
            {/* Sidebar */}
            <div className="col-md-3    ">
              <SidebarPerfil />
            </div>

            {/* Contenido principal */}
            <div className="col-md-8 col-lg-7">
              <div className="px-2 px-md-0">
                <h2 className="h5 fw-bold mb-2 d-flex align-items-center gap-2">📄 Mis suscripciones</h2>
                <p className="text-muted small mb-3">Usuarios a los que te has suscrito a su contenido</p>

                <div className="table-responsive rounded-4 overflow-hidden shadow-sm border border-1 border-light-subtle bg-white">
                  <table className="table table-striped table-borderless align-middle mb-0">
                    <thead className="bg-light text-center text-uppercase small text-secondary border-bottom">
                      <tr>
                        <th style={{ width: '25%' }}>Suscrito</th>
                        <th style={{ width: '15%' }}>Fecha</th>
                        <th style={{ width: '15%' }}>Intervalo</th>
                        <th style={{ width: '20%' }}>Termina en</th>
                        <th style={{ width: '15%' }}>Estado</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
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
                        }
                      ].map((sub, i) => (
                        <tr key={i} className="align-middle">
                          <td className="d-flex align-items-center gap-3 ps-3 py-3">
                            <img
                              src={sub.avatar}
                              alt={sub.name}
                              className="rounded-circle border border-2"
                              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                            />
                            <span className="fw-semibold text-primary-emphasis small">{sub.name}</span>
                          </td>
                          <td className="text-muted small">{sub.fecha}</td>
                          <td className="text-muted small">{sub.intervalo}</td>
                          <td className="text-muted small">{sub.fin}</td>
                          <td>
                            <span className={`badge px-3 py-2 rounded-pill fw-medium small ${sub.estado === 'CANCELADO' ? 'bg-danger-subtle text-danger' : 'bg-success-subtle text-success'}`}>
                              {sub.estado}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
