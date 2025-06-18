'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';

export default function BilleteraPage() {
  const [formData, setFormData] = useState({
    nombreUsuario: 'Mario bros',
    nombreLink: 'arsmate.com/u61414',
    email: '',
    profesion: '',
    idioma: 'Español',
    fechaNacimiento: '1969-12-31',
    genero: 'No especificado',
    empresa: '',
    pais: 'Chile',
    ciudad: '',
    direccion: '',
    postal: ''
  });

  const [monto, setMonto] = useState('');

  const handleRecarga = (e) => {
    e.preventDefault();
    alert(`Recargando ${monto}`);
  };

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
            <div className="col-md-8 col-lg-7">
              <div className="px-2 px-md-0">
                <h1 className="h5 fw-bold mb-2 text-center text-md-start">💳 Billetera</h1>
                <p className="text-muted small mb-3 text-center text-md-start">
                  Agrega fondos a tu billetera para suscripciones, propinas y más.
                </p>

                {/* Saldo actual */}
                <div className="bg-primary text-white rounded-4 p-3 text-center fw-bold mb-3">
                  $0.00 USD
                  <div className="fw-normal small mt-1">Fondos disponibles en tu cuenta</div>
                </div>

                {/* Información de tarjeta y advertencias */}
                <div className="bg-white border rounded-4 p-3 mb-3 shadow-sm">
                  <h6 className="text-center fw-semibold mb-3">💳 Tarjeta Crédito / Débito / Prepago</h6>
                  <div className="d-flex justify-content-center gap-2 mb-3">
                    <img src="/visa.png" alt="Visa" style={{ height: '24px' }} />
                    <img src="/mastercard.png" alt="Mastercard" style={{ height: '24px' }} />
                    <img src="/amex.png" alt="Amex" style={{ height: '24px' }} />
                    <img src="/redcompra.png" alt="RedCompra" style={{ height: '24px' }} />
                  </div>
                  <p className="text-center small text-muted mb-1">
                    Ingresa el monto en dólares que deseas recargar.
                  </p>
                  <p className="text-center small text-muted">
                    Para pagar con medios de pago chilenos, cambia tu país a Chile en tu cuenta Arsmate.
                  </p>
                  <p className="text-center small text-muted mt-2 fw-semibold">
                    SI TIENES PROBLEMAS CON UNA TRANSACCIÓN, ESCRÍBENOS AL WHATSAPP +56975444657
                  </p>
                  <p className="text-center text-muted mt-2 small">
                    Se aplicarán tarifas por uso de la plataforma y procesamiento de pagos. <br />
                    <strong>IMPORTANTE:</strong> Los saldos recargados <u>no son reembolsables</u>.
                  </p>
                </div>

                {/* Formulario de recarga */}
                <form onSubmit={handleRecarga} className="mb-4">
                  <div className="mb-3">
                    <input
                      type="text"
                      value={monto}
                      onChange={(e) => setMonto(e.target.value)}
                      placeholder="$ Monto (Mínimo $5 - Máximo $100)"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100 fw-semibold py-2">
                    Agregar fondos
                  </button>
                </form>

                {/* Historial */}
                <h6 className="fw-bold mb-2">Historial de fondos agregados</h6>
                <div className="table-responsive rounded-4 overflow-hidden shadow-sm border bg-white mb-2">
                  <table className="table table-sm table-hover align-middle mb-0">
                    <thead className="table-light text-center small text-secondary text-uppercase">
                      <tr>
                        <th>ID</th>
                        <th>Monto</th>
                        <th>Pasarela</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Comprobante</th>
                      </tr>
                    </thead>
                    <tbody className="text-center small">
                      {[
                        { id: '1359665', monto: '$5', pasarela: 'Flow', fecha: '16 Dec, 2024' },
                        { id: '1292193', monto: '$7', pasarela: 'Flow', fecha: '11 Nov, 2024' },
                        { id: '1042979', monto: '$9', pasarela: 'Flow', fecha: '27 Jun, 2024' },
                        { id: '916462', monto: '$11', pasarela: 'Flow', fecha: '08 Apr, 2024' }
                      ].map((tx) => (
                        <tr key={tx.id}>
                          <td>{tx.id}</td>
                          <td>{tx.monto}</td>
                          <td>{tx.pasarela}</td>
                          <td>{tx.fecha}</td>
                          <td className="text-success fw-bold">ÉXITO</td>
                          <td><a href="#" className="text-primary">📄 Comprobante</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="small text-muted mt-2">
                  * La tarifa de transacción no está incluida en el monto recargado, solo se refleja en la factura.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <FooterPerfil />
    </>
  );
}
