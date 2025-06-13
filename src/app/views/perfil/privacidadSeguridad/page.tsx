'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // para App Router
import { motion, AnimatePresence } from 'framer-motion';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';
import router from 'next/router';

export default function PrivacidadSeguridadPage() {
  

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
           
        </section>


      </div>

    </main>
    
      <FooterPerfil />
    </>
  );
}
