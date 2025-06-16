'use client';

import { useState } from 'react';
import FooterPerfil from '../../../componentes/perfil/footerPerfil';
import SidebarPerfil from '../../../componentes/perfil/sidebarPerfil';

type UsuarioRestringido = {
  id: number;
  nombre: string;
  motivo: string;
  evidencia?: string;
};

export default function UsuarioRestringidoPage() {
  const [restringidos, setRestringidos] = useState<UsuarioRestringido[]>([
    { id: 1, nombre: 'Carlos Mendoza', motivo: 'Spam' },
    { id: 2, nombre: 'Ana Torres', motivo: 'Acoso' },
  ]);

  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoMotivo, setNuevoMotivo] = useState('');
  const [motivoPersonalizado, setMotivoPersonalizado] = useState('');
  const [evidenciaArchivo, setEvidenciaArchivo] = useState<File | null>(null);

  const agregarUsuario = () => {
    if (nuevoNombre.trim() === '') return;

    const motivoFinal =
      nuevoMotivo === 'Otro'
        ? motivoPersonalizado.trim() || 'Otro (no especificado)'
        : nuevoMotivo;

    setRestringidos([
      ...restringidos,
      {
        id: Date.now(),
        nombre: nuevoNombre,
        motivo: motivoFinal,
        evidencia: evidenciaArchivo?.name || 'Sin archivo',
      },
    ]);

    setNuevoNombre('');
    setNuevoMotivo('');
    setMotivoPersonalizado('');
    setEvidenciaArchivo(null);
  };

  const eliminarUsuario = (id: number) => {
    setRestringidos(restringidos.filter((u) => u.id !== id));
  };

  return (
    <>
      <main className="min-h-screen bg-[#f9fbfc] text-gray-700 p-2 md:p-4 flex justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow min-h-screen md:min-h-[80vh]">
          {/* Sidebar */}
          <div className="w-full md:w-64 md:h-screen sticky top-0 p-4 border-r border-gray-200 bg-white overflow-y-auto">
            <SidebarPerfil />
          </div>

          {/* Contenido */}
          <section className="flex-1 w-full p-4 md:p-10 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-2">
                🚫 Usuarios restringidos
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Aquí puedes gestionar usuarios que has bloqueado o restringido por conducta inapropiada.
              </p>
            </div>

            {/* Lista de restringidos */}
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-2">Usuario</th>
                    <th className="px-4 py-2">Motivo</th>
                    <th className="px-4 py-2">Evidencia</th>
                    <th className="px-4 py-2 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {restringidos.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">{user.nombre}</td>
                      <td className="px-4 py-3 text-gray-600">{user.motivo}</td>
                      <td className="px-4 py-3 text-gray-500">{user.evidencia || 'N/A'}</td>
                      <td className="px-4 py-3 text-right">
                        <button
                          className="text-sm text-red-600 hover:underline"
                          onClick={() => eliminarUsuario(user.id)}
                        >
                          Quitar restricción
                        </button>
                      </td>
                    </tr>
                  ))}
                  {restringidos.length === 0 && (
                    <tr>
                      <td className="px-4 py-4 text-center text-gray-400 italic" colSpan={4}>
                        No hay usuarios restringidos.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Formulario agregar */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Agregar usuario restringido</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Nombre o ID del usuario"
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0]"
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                />

                <select
                  className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0]"
                  value={nuevoMotivo}
                  onChange={(e) => {
                    setNuevoMotivo(e.target.value);
                    if (e.target.value !== 'Otro') {
                      setMotivoPersonalizado('');
                    }
                  }}
                >
                  <option value="">Selecciona un motivo</option>
                  <option value="Spam">📩 Spam</option>
                  <option value="Lenguaje ofensivo">🗯️ Lenguaje ofensivo</option>
                  <option value="Acoso">🚫 Acoso</option>
                  <option value="Contenido inapropiado">⚠️ Contenido inapropiado</option>
                  <option value="Suplantación de identidad">🎭 Suplantación de identidad</option>
                  <option value="Otro">❓ Otro</option>
                </select>

                <button
                  onClick={agregarUsuario}
                  className="bg-[#9c27b0] text-white font-medium rounded px-4 py-2 hover:brightness-110 transition"
                >
                  Agregar
                </button>
              </div>

              {/* Textarea para motivo personalizado */}
              {nuevoMotivo === 'Otro' && (
                <div className="mt-4">
                  <textarea
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#9c27b0]"
                    rows={3}
                    placeholder="Especifica el motivo..."
                    value={motivoPersonalizado}
                    onChange={(e) => setMotivoPersonalizado(e.target.value)}
                  />
                </div>
              )}

              {/* Subida de evidencia */}
              <div className="mt-4">
                <label className="block text-sm text-gray-700 mb-1">Subir evidencia (opcional):</label>
                <input
                  type="file"
                  accept="image/*,video/*,.pdf"
                  onChange={(e) =>
                    setEvidenciaArchivo(e.target.files && e.target.files[0] ? e.target.files[0] : null)
                  }
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[#9c27b0] file:text-white file:rounded hover:file:brightness-110"
                />
                {evidenciaArchivo && (
                  <p className="text-xs text-gray-500 mt-1">Archivo seleccionado: {evidenciaArchivo.name}</p>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      <FooterPerfil />
    </>
  );
}
