'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // para App Router
import { motion, AnimatePresence } from 'framer-motion';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';
import router from 'next/router';

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



  const [monto, setMonto] = useState('')

  const handleRecarga = (e) => {
    e.preventDefault()
    alert(`Recargando ${monto}`)
  }

 return (
  <>
    <main className="min-h-screen bg-[#f9fbfc] text-gray-700 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow overflow-hidden">
        {/* Sidebar en escritorio */}

        <div className="w-full md:w-64 p-4 border-r border-gray-200 md:border-r-0 md:pr-0">
        <SidebarPerfil  />
        </div>

        {/* Formulario principal */}
        <section className="flex-1 w-full p-4 md:p-10 ">
            <h1 className="text-2xl font-bold flex items-center gap-2 mb-1">
                💳 Billetera
            </h1>
            <p className="text-gray-500 mb-6">Agregue fondos a su billetera para usar en suscripciones, propinas, entre otros</p>

            <div className="bg-indigo-500 text-white rounded-lg p-6 text-center font-bold text-lg mb-4">
                $0.00 USD
                <div className="text-sm font-normal mt-1">Fondos disponibles en tu cuenta</div>
            </div>

            <div className="border rounded-lg p-4 mb-4">
                <h3 className="text-center text-md font-semibold mb-2">💳 Tarjeta Crédito / Débito / Prepago</h3>
                <div className="flex justify-center gap-2 mb-2">
                <img src="/visa.png" alt="Visa" className="h-6" />
                <img src="/mastercard.png" alt="Mastercard" className="h-6" />
                <img src="/amex.png" alt="Amex" className="h-6" />
                <img src="/redcompra.png" alt="RedCompra" className="h-6" />
                </div>
                <p className="text-center text-sm text-gray-600 mb-2">
                Ingresa el monto que quieres recargar expresado en dólares.
                </p>
                <p className="text-center text-sm text-gray-500">
                Para pagar con medios de pago chilenos, solo debes cambiar el país configurado en tu cuenta Arsmate por Chile.
                </p>
                <p className="text-center text-sm text-gray-500 mt-2 font-semibold">
                SI TIENES INCONVENIENTES CON ALGUNA TRANSACCIÓN, HÁBLANOS VÍA WHATSAPP AL +56975444657
                </p>
                <p className="text-center text-xs text-gray-400 mt-2">
                Se aplicarán tarifas por uso de la plataforma y procesamiento de pagos<br />
                IMPORTANTE: Los saldos recargados NO SON REEMBOLSABLES.
                </p>
            </div>

            <form onSubmit={handleRecarga} className="space-y-4">
                <input
                    type="text"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                    placeholder="$ Monto (Mínimo $5 - Máximo $100)"
                    className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 transition text-white w-full py-3 rounded-full font-semibold"
                >
                    Agregar fondos
                </button>
            </form>

            <h3 className="mt-10 mb-2 text-gray-700 font-bold text-lg">Historial de fondos agregados</h3>
            <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase border-b">
                <tr>
                    <th className="py-2">ID</th>
                    <th>Monto</th>
                    <th>Pasarela de pago</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Comprobante</th>
                </tr>
                </thead>
                <tbody>
                {[
                    { id: '1359665', monto: '$5', pasarela: 'Flow', fecha: '16 Dec, 2024' },
                    { id: '1292193', monto: '$7', pasarela: 'Flow', fecha: '11 Nov, 2024' },
                    { id: '1042979', monto: '$9', pasarela: 'Flow', fecha: '27 Jun, 2024' },
                    { id: '916462', monto: '$11', pasarela: 'Flow', fecha: '08 Apr, 2024' },
                ].map((tx) => (
                    <tr key={tx.id} className="border-b">
                    <td className="py-2">{tx.id}</td>
                    <td>{tx.monto}</td>
                    <td>{tx.pasarela}</td>
                    <td>{tx.fecha}</td>
                    <td className="text-green-600 font-bold">ÉXITO</td>
                    <td><a href="#" className="text-sky-600 hover:underline">📄 Comprobante</a></td>
                    </tr>
                ))}
                </tbody>
            </table>

            <p className="text-xs text-gray-500 mt-2">
                * La tarifa de transacción no está incluida en el monto, solo en factura.
            </p>
        </section>
      </div>

    </main>
    
      <FooterPerfil />
    </>
  );
}
