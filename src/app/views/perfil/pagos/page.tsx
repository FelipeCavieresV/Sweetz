'use client';

import { useState, useEffect } from 'react';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';

export default function PagosPage() {
  const [cuenta, setCuenta] = useState('');
  const [banco, setBanco] = useState('');
  const [tipoCuenta, setTipoCuenta] = useState('');
  const [valorSuscripcion, setValorSuscripcion] = useState(5.99);
  const [montoDisponible, setMontoDisponible] = useState(24000);
  const [pagosRecibidos, setPagosRecibidos] = useState([
    { id: 1, fecha: '2025-06-01', monto: 12000 },
    { id: 2, fecha: '2025-05-15', monto: 15000 },
  ]);

  useEffect(() => {
    const datosGuardados = localStorage.getItem('datosPago');
    if (datosGuardados) {
      const { banco, cuenta, tipoCuenta, valorSuscripcion } = JSON.parse(datosGuardados);
      setBanco(banco);
      setCuenta(cuenta);
      setTipoCuenta(tipoCuenta);
      setValorSuscripcion(valorSuscripcion);
    }
  }, []);

  const obtenerComision = (valor: number) => valor <= 6 ? 0.05 : 0.07;
  const calcularMontoFinal = (valor: number) => valor * (1 - obtenerComision(valor));

  const manejarRetiro = () => {
    if (!cuenta || !banco || !tipoCuenta) {
      alert('Por favor completa todos los datos bancarios antes de retirar.');
      return;
    }

    if (montoDisponible > 0) {
      alert(`Has solicitado el retiro de $${montoDisponible.toLocaleString()} a tu cuenta del banco ${banco}`);
      setPagosRecibidos([
        ...pagosRecibidos,
        { id: Date.now(), fecha: new Date().toISOString().split('T')[0], monto: montoDisponible },
      ]);
      setMontoDisponible(0);
    }
  };

  const manejarGuardarDatos = () => {
    if (!cuenta || !banco || !tipoCuenta || !valorSuscripcion) {
      alert('Por favor completa todos los campos antes de guardar.');
      return;
    }

    const datos = { cuenta, banco, tipoCuenta, valorSuscripcion };
    localStorage.setItem('datosPago', JSON.stringify(datos));
    alert('✅ Tus datos bancarios y valor de suscripción han sido guardados correctamente.');
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

            {/* Contenido principal */}
            <div className="col-md-8 col-lg-7">
              <div className="px-2 px-md-0">
                <h2 className="h5 fw-bold mb-2 d-flex align-items-center gap-2">💰 Recibir Pagos</h2>
                <p className="text-muted small mb-4">
                  Administra tus métodos de pago, guarda tu cuenta bancaria y realiza retiros de tus ganancias.
                </p>

                {/* Datos bancarios */}
                <div className="bg-white border rounded-4 shadow-sm p-3 mb-3">
                  <h5 className="fw-semibold mb-3 fs-6">Datos bancarios</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Banco (ej: Banco Estado)"
                        value={banco}
                        onChange={(e) => setBanco(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Número de cuenta"
                        value={cuenta}
                        onChange={(e) => setCuenta(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-select"
                        value={tipoCuenta}
                        onChange={(e) => setTipoCuenta(e.target.value)}
                      >
                        <option value="">Tipo de cuenta</option>
                        <option value="vista">Cuenta vista</option>
                        <option value="corriente">Cuenta corriente</option>
                        <option value="rut">Cuenta RUT</option>
                      </select>
                    </div>
                  </div>
                  <button
                    onClick={manejarGuardarDatos}
                    className="btn btn-primary mt-3"
                    style={{ backgroundColor: '#9c27b0', borderColor: '#9c27b0' }}
                  >
                    Guardar datos bancarios
                  </button>
                </div>

                {/* Monto disponible */}
                <div className="bg-white border border-info-subtle rounded-4 shadow-sm p-3 mb-3">
                  <h5 className="fw-semibold fs-6 mb-2 text-info">Monto disponible</h5>
                  <p className="h4 text-primary fw-bold mb-3">${montoDisponible.toLocaleString()}</p>
                  <button
                    className="btn btn-success"
                    disabled={montoDisponible === 0}
                    onClick={manejarRetiro}
                  >
                    Retirar fondos
                  </button>
                </div>

                {/* Comisión */}
                <div className="bg-white border rounded-4 shadow-sm p-3">
                  <h5 className="fw-semibold fs-6 mb-2">Comisión por suscripción</h5>
                  <p className="small text-muted">Se aplica una comisión por cada suscripción:</p>
                  <ul className="small text-muted ps-3">
                    <li>🔹 Si el valor es menor o igual a $6 USD, se descuenta un <strong>5%</strong>.</li>
                    <li>🔹 Si el valor es mayor a $6 USD, se descuenta un <strong>7%</strong>.</li>
                  </ul>

                  <div className="mt-3">
                    <label className="form-label small text-muted">Valor de tu suscripción ($USD):</label>
                    <input
                      type="number"
                      min="1"
                      step="0.01"
                      className="form-control w-50"
                      value={valorSuscripcion}
                      onChange={(e) => setValorSuscripcion(parseFloat(e.target.value))}
                    />
                    <p className="small text-muted mt-1">
                      Recibirás aproximadamente: <strong>${calcularMontoFinal(valorSuscripcion).toFixed(2)}</strong> por suscriptor.
                    </p>
                  </div>
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
