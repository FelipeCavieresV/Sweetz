'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // para App Router
import { motion, AnimatePresence } from 'framer-motion';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';
import router from 'next/router';

export default function CreadorPage() {
  

 return (
  <>
    <main className="min-h-screen bg-[#f9fbfc] text-gray-700 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl w-full max-w-6xl bg-white rounded-lg shadow overflow-hidden">
        {/* Sidebar en escritorio */}

        <div className="w-full md:w-64 p-4 border-r border-gray-200 md:border-r-0 md:pr-0">
        <SidebarPerfil />
        </div>

        {/* Formulario principal */}
        <section className="flex-1 w-full p-4 md:p-10 ">
            {/* Título principal */}
            <h2 className="text-2xl font-bold text-gray-700 mb-1 flex items-center gap-2">✔ Verificar cuenta</h2>
            <p className="text-sm text-gray-500 mb-6">Ingrese su dirección, ciudad, código postal y adjunte foto de su cédula de identidad</p>

            {/* Alerta amarilla */}
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 text-sm rounded-lg p-4 mb-6">
                ⚠️ Si eres chilena(o) solo debes enviar foto de la parte frontal de tu cédula. Envía una foto perfectamente legible de tu cédula de identidad o pasaporte (recomendado), no se aceptarán fotocopias, fotos borrosas o en mala calidad u otros documentos. Si tu cuenta es en pareja, debes enviar las dos cédulas de identidad en una sola foto.
            </div>

            {/* Formulario de verificación */}
            <form className="space-y-4">

                <input
                type="text"
                placeholder="Pais"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#9c27b0]"
                />
                <input
                type="text"
                placeholder="Dirección"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#9c27b0]"
                />
                <input
                type="text"
                placeholder="Ciudad"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#9c27b0]"
                />
                <input
                type="text"
                placeholder="Comuna"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#9c27b0]"
                />
                <input
                type="text"
                placeholder="Codigo Postal"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#9c27b0]"
                />
                
                {/* Subir imagen */}
                <div className="border-2 border-dotted border-[#9c27b0] rounded-lg p-4 text-center text-sm text-[#9c27b0] bg-white">
                <label className="cursor-pointer">
                    <span className="font-medium">Subir imagen (JPG, PNG, GIF) o ZIP – Máximo: 30MB</span>
                    <input type="file" className="hidden" />
                </label>
                <p className="text-gray-400 mt-1 text-xs">
                    Sube una foto de tu cédula de identidad o pasaporte donde se vea claramente tu número de identificación y tu fecha de nacimiento.
                </p>
                </div>

                {/* Botón de envío */}
                <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full transition"
                >
                Enviar para aprobación
                </button>
            </form>
            </section>

      </div>

    </main>
    
      <FooterPerfil />
    </>
  );
}
