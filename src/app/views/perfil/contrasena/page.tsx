'use client';

import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';


export default function ContraseñaPage() {

 return (
  <>
    <main className="min-h-screen bg-[#f9fbfc] text-gray-700 flex md:items-center md:justify-center p-2 md:p-4">

      <div className="flex flex-col md:flex-row w-full max-w-6xl w-full max-w-6xl bg-white rounded-lg shadow overflow-hidden">
        {/* Sidebar en escritorio */}

        <div className="w-full md:w-64 md:h-screen sticky top-0 p-4 border-r border-gray-200 bg-white overflow-y-auto">
          <SidebarPerfil />
        </div>

        {/* Formulario principal */}
        <section className="flex-1 w-full p-4 md:p-10">
           <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">🔐 Cambiar contraseña</h2>
            <p className="text-sm text-gray-500 mb-6">
                Actualiza tu contraseña ingresando la actual y una nueva.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña actual</label>
                <input
                    type="password"
                    placeholder="Ingresa tu contraseña actual"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nueva contraseña</label>
                <input
                    type="password"
                    placeholder="Ingresa una nueva contraseña"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar nueva contraseña</label>
                <input
                    type="password"
                    placeholder="Repite la nueva contraseña"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
                </div>

                <button
                type="submit"
                className="bg-[#9c27b0] hover:bg-[#7b1fa2] transition text-white w-full py-3 rounded-full font-semibold"
                >
                Guardar nueva contraseña
                </button>
            </form>
            </div>
        </section>


      </div>

    </main>
    
      <FooterPerfil />
    </>
  );
}
