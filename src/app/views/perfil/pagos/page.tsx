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

  // Cargar datos almacenados previamente
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

    const datos = {
      cuenta,
      banco,
      tipoCuenta,
      valorSuscripcion,
    };

    localStorage.setItem('datosPago', JSON.stringify(datos));
    alert('✅ Tus datos bancarios y valor de suscripción han sido guardados correctamente.');
  };

  return (
    <>
      <main className="min-h-screen bg-[#f9fbfc] text-gray-700 flex md:items-center md:justify-center p-2 md:p-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow overflow-hidden">
          <div className="w-full md:w-64 md:h-screen sticky top-0 p-4 border-r border-gray-200 bg-white overflow-y-auto">
            <SidebarPerfil />
          </div>

          <section className="flex-1 w-full p-4 md:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">💰 Recibir Pagos</h2>
            <p className="text-sm text-gray-500">
              Administra tus métodos de pago, guarda tu cuenta bancaria y realiza retiros de tus ganancias.
            </p>

            {/* Formulario de datos bancarios */}
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Datos bancarios</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Banco (ej: Banco Estado)"
                  value={banco}
                  onChange={(e) => setBanco(e.target.value)}
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0]"
                />
                <input
                  type="text"
                  placeholder="Número de cuenta"
                  value={cuenta}
                  onChange={(e) => setCuenta(e.target.value)}
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0]"
                />
                <select
                  value={tipoCuenta}
                  onChange={(e) => setTipoCuenta(e.target.value)}
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0]"
                >
                  <option value="">Tipo de cuenta</option>
                  <option value="vista">Cuenta vista</option>
                  <option value="corriente">Cuenta corriente</option>
                  <option value="rut">Cuenta RUT</option>
                </select>
              </div>

              <button
                onClick={manejarGuardarDatos}
                className="mt-4 bg-[#8e24aa] text-white px-4 py-2 rounded hover:brightness-110 transition"
              >
                Guardar datos bancarios
              </button>
            </div>

            {/* Monto disponible */}
            <div className="bg-[#f3e8f7] p-4 rounded-lg shadow border border-[#e0cfe8] space-y-3">
              <p className="text-gray-600 mb-1">Monto disponible:</p>
              <p className="text-3xl font-bold text-[#9c27b0]">${montoDisponible.toLocaleString()}</p>
              <button
                onClick={manejarRetiro}
                disabled={montoDisponible === 0}
                className="bg-[#9c27b0] text-white px-4 py-2 rounded hover:brightness-110 transition disabled:opacity-50"
              >
                Retirar fondos
              </button>
            </div>

            {/* Comisión explicativa */}
            <div className="border border-gray-200 p-4 rounded-lg bg-[#fcf8ff]">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Comisión por suscripción</h3>
              <p className="text-sm text-gray-600 mb-2">
                Se aplica una comisión por cada suscripción:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>🔹 Si el valor es menor o igual a $6 USD, se descuenta un <strong>5%</strong>.</li>
               <li>🔹 Si el valor es mayor a $6 USD, se descuenta un <strong>7%</strong>.</li>
              </ul>

              <div className="mt-4">
                <label className="text-sm text-gray-700">Valor de tu suscripción ($USD):</label>
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  value={valorSuscripcion}
                  onChange={(e) => setValorSuscripcion(parseFloat(e.target.value))}
                  className="mt-1 block w-full md:w-1/2 border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0]"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Recibirás aproximadamente: <strong>${calcularMontoFinal(valorSuscripcion).toFixed(2)}</strong> por suscriptor.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FooterPerfil />
    </>
  );
}
