'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';

export default function EditarPerfilPage() {
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

  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del perfil:', formData);
  };

  return (
    <>
       <main className="min-h-screen bg-[#f9fbfc] text-gray-700 flex md:items-center md:justify-center p-2 md:p-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow overflow-hidden">
          {/* Sidebar en escritorio */}
          <div className="w-full md:w-64 md:h-screen sticky top-0 p-4 border-r border-gray-200 bg-white overflow-y-auto">
            <SidebarPerfil />
          </div>

          {/* Formulario principal */}
          <section className="flex-1 w-full p-4 md:p-10 ">
            <h1 className="text-2xl font-bold mb-2 flex items-center gap-2 justify-center md:justify-start">✏️ Editar perfil</h1>
            <p className="text-gray-500 mb-4 text-center md:text-left">Cuéntanos algo sobre ti.</p>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="nombreUsuario" className="text-sm text-gray-600 mb-1">Nombre de Usuario</label>
                <input
                  id="nombreUsuario"
                  name="nombreUsuario"
                  value={formData.nombreUsuario}
                  onChange={handleChange}
                  placeholder="Nombre de Usuario"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="nombreLink" className="text-sm text-gray-600 mb-1">Nombre de Link</label>
                <input
                  id="nombreLink"
                  name="nombreLink"
                  value={formData.nombreLink}
                  onChange={handleChange}
                  placeholder="Nombre de Link"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
              </div>

              <div className="text-sm text-gray-500">
                🔘 Mostrar nombre de tu link en lugar de tu Nombre de usuario
              </div>

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo"
                disabled
                className="border bg-gray-100 border-gray-300 p-2 rounded w-full text-gray-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="profesion"
                  value={formData.profesion}
                  onChange={handleChange}
                  placeholder="Profesión/Ocupación"
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
                <select
                  name="idioma"
                  value={formData.idioma}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                >
                  <option value="Español">Español</option>
                  <option value="Inglés">Inglés</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="fechaNacimiento"
                  type="date"
                  required
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
                <select
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                >
                  <option value="No especificado">(Género) No especificado</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <p className="text-xs text-gray-500">
                Formatos válidos: <strong className="text-black">13/06/2007</strong> – (Se puede editar sólo una vez)
              </p>

              <hr />
              <h3 className="text-gray-500 text-sm font-medium">– Información de facturación</h3>

              <input
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Empresa"
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="pais"
                  value={formData.pais}
                  onChange={handleChange}
                  placeholder="País"
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
                <input
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  placeholder="Ciudad"
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Dirección"
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
                <input
                  name="postal"
                  value={formData.postal}
                  onChange={handleChange}
                  placeholder="Código Postal"
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0] focus:border-[#9c27b0]"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 transition text-white w-full py-3 rounded-full font-semibold"
              >
                Guardar cambios
              </button>
            </form>

          </section>
        </div>
      </main>

      <FooterPerfil />
    </>
  );
}
