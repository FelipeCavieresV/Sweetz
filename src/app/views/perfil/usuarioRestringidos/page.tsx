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
                <h2 className="h5 fw-bold mb-2 d-flex align-items-center gap-2">🚫 Usuarios restringidos</h2>
                <p className="text-muted small mb-4">
                  Aquí puedes gestionar usuarios que has bloqueado o restringido por conducta inapropiada.
                </p>

                {/* Lista de usuarios */}
                <div className="bg-white border rounded-4 shadow-sm p-3 mb-3">
                  <h5 className="fw-semibold mb-3 fs-6">Usuarios bloqueados</h5>
                  <div className="table-responsive">
                    <table className="table table-sm table-bordered align-middle text-center">
                      <thead className="table-light text-uppercase small">
                        <tr>
                          <th>Usuario</th>
                          <th>Motivo</th>
                          <th>Evidencia</th>
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {restringidos.length === 0 ? (
                          <tr>
                            <td colSpan={4} className="text-muted fst-italic">
                              No hay usuarios restringidos.
                            </td>
                          </tr>
                        ) : (
                          restringidos.map((user) => (
                            <tr key={user.id}>
                              <td>{user.nombre}</td>
                              <td>{user.motivo}</td>
                              <td>{user.evidencia || 'N/A'}</td>
                              <td>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => eliminarUsuario(user.id)}
                                >
                                  Quitar restricción
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Formulario para agregar usuario */}
                <div className="bg-white border rounded-4 shadow-sm p-3">
                  <h5 className="fw-semibold mb-3 fs-6">Agregar usuario restringido</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre o ID del usuario"
                        value={nuevoNombre}
                        onChange={(e) => setNuevoNombre(e.target.value)}
                      />
                    </div>

                    <div className="col-md-6">
                      <select
                        className="form-select"
                        value={nuevoMotivo}
                        onChange={(e) => {
                          setNuevoMotivo(e.target.value);
                          if (e.target.value !== 'Otro') setMotivoPersonalizado('');
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
                    </div>

                    {nuevoMotivo === 'Otro' && (
                      <div className="col-12">
                        <textarea
                          className="form-control"
                          rows={2}
                          placeholder="Especifica el motivo..."
                          value={motivoPersonalizado}
                          onChange={(e) => setMotivoPersonalizado(e.target.value)}
                        />
                      </div>
                    )}

                    <div className="col-12">
                      <label className="form-label small text-muted">Subir evidencia (opcional):</label>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*,video/*,.pdf"
                        onChange={(e) =>
                          setEvidenciaArchivo(e.target.files?.[0] || null)
                        }
                      />
                      {evidenciaArchivo && (
                        <p className="text-muted small mt-1">
                          Archivo seleccionado: {evidenciaArchivo.name}
                        </p>
                      )}
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 fw-semibold"
                        style={{ backgroundColor: '#9c27b0', borderColor: '#9c27b0' }}
                        onClick={agregarUsuario}
                      >
                        Agregar usuario
                      </button>
                    </div>
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